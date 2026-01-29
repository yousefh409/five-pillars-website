import React, { useState, useEffect, useMemo } from 'react';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/Title/SubTitle';
import { hatch } from 'ldrs';
import Fuse from 'fuse.js';
import './Map2.css';

hatch.register();

const Map2 = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Fuse.js configuration for fuzzy search
  const fuseOptions = {
    threshold: 0.35,
    location: 0,
    distance: 200,
    minMatchCharLength: 2,
    keys: ['name', 'location'],
    shouldSort: true,
    findAllMatches: true
  };

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data/combined_data.csv');
        const csvText = await response.text();
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');
        
        const parsedData = [];
        let latestDate = null;

        for (let i = 1; i < rows.length; i++) {
          if (!rows[i].trim()) continue;
          
          const values = rows[i].split(',');
          const record = {
            location: values[0]?.trim() || '',
            name: values[1]?.trim() || '',
            date_of_death: values[2]?.trim() || ''
          };

          if (record.name && record.location) {
            parsedData.push(record);

            // Track latest date for "Last Updated"
            if (record.date_of_death) {
              const parts = record.date_of_death.split('/');
              if (parts.length === 3) {
                let year = parseInt(parts[2], 10);
                if (year >= 0 && year < 100) year = 2000 + year;
                if (year >= 2000 && year <= 2099) {
                  const parsedDate = new Date(year, parseInt(parts[0], 10) - 1, parseInt(parts[1], 10));
                  if (!isNaN(parsedDate.getTime()) && (!latestDate || parsedDate > latestDate)) {
                    latestDate = parsedDate;
                  }
                }
              }
            }
          }
        }

        setData(parsedData);
        setLastUpdated(latestDate);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Create Fuse instance for searching
  const fuse = useMemo(() => {
    return new Fuse(data, fuseOptions);
  }, [data]);

  // Filter data based on search
  const filteredData = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) {
      return data;
    }
    return fuse.search(searchQuery).map(result => result.item);
  }, [searchQuery, fuse, data]);

  const formatLastUpdated = () => {
    if (!lastUpdated) return null;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return lastUpdated.toLocaleDateString('en-US', options);
  };

  const formatLocation = (location) => {
    // Extract section (first 1-2 letters) and plot number
    const match = location.match(/^([A-Z]+)(\d+)$/);
    if (match) {
      const [, section, number] = match;
      // Check if it's a Block (ends with S) or Row (double letter)
      if (section.endsWith('S')) {
        return `Block ${section[0]}, Plot #${number}`;
      } else {
        return `Row ${section}, Plot #${number}`;
      }
    }
    return location;
  };

  const handleRowClick = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div className="p-6 lg:p-12 pb-24">
      <Title content="Burial Records" />
      
      {lastUpdated && !isLoading && (
        <div className="text-gray-600 text-sm mb-4">
          Last Updated: {formatLastUpdated()}
        </div>
      )}

      <SubTitle content="Search" />
      
      <div className="search-section mb-6">
        <input
          type="text"
          placeholder="Search by name or location (e.g., AA13)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search for burial records"
        />
        {searchQuery && (
          <button 
            className="clear-search"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
      </div>

      {selectedRecord && (
        <div className="selected-record">
          <strong>{selectedRecord.name}</strong> is located at {formatLocation(selectedRecord.location)}
          {selectedRecord.date_of_death && ` (Date of Death: ${selectedRecord.date_of_death})`}
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center m-5">
          <l-hatch
            size="40"
            stroke="4"
            speed="3.5"
            color="rgb(20 83 45)"
          ></l-hatch>
        </div>
      ) : (
        <>
          <div className="results-count">
            Showing {filteredData.length} of {data.length} records
          </div>

          <div className="table-container">
            <table className="records-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Name</th>
                  <th>Date of Death</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((record, index) => (
                  <tr 
                    key={`${record.location}-${index}`}
                    onClick={() => handleRowClick(record)}
                    className={selectedRecord?.location === record.location ? 'selected' : ''}
                  >
                    <td className="location-cell">{record.location}</td>
                    <td className="name-cell">{record.name}</td>
                    <td className="date-cell">{record.date_of_death}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && searchQuery && (
            <div className="no-results">
              No results found for "{searchQuery}". Try a different spelling or check the name format.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Map2;
