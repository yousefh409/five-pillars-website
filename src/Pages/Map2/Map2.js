import React from 'react';
import Block2 from '../../components/Map/Block2';
import Row2 from '../../components/Map/Row2';
import EmptyGrave from '../../components/Map/EmptyGrave';
import Grave from '../../components/Map/Grave';
import BigWalkway from '../../components/Map/BigWalkway';
import Title from '../../components/Title/Title';

import WalkwayPathHorizontal from '../../components/Map/WalkwayPathHorizontal';
import WalkwayPathVertical from '../../components/Map/WalkwayPathVertical';
import './Map2.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ReactSearchBox from 'react-search-box';
import SubTitle from '../../components/Title/SubTitle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { hatch } from 'ldrs'
import Fuse from 'fuse.js'

hatch.register()

class Map2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      selectedId: 'none',
      selectedName: 'none',
      width: 0,
      height: 0,
      selectedSection: 'none',
      isLoading: true,
      lastUpdated: null,
      searchQuery: '',
      showNoResults: false,
      allData: {},  // Data grouped by section
    };
    this.state.fuseConfigs = {
      threshold: 0.35,
      location: 0,
      distance: 200,
      minMatchCharLength: 2,
      keys: ["value"],
      shouldSort: true,
      findAllMatches: true
    }
    this.addToNamesList = this.addToNamesList.bind(this);
    this.selectSection = this.selectSection.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.selectSearch = this.selectSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fuseInstance = null;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.loadData();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  loadData = async () => {
    try {
      // Fetch from published Google Sheets CSV
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRQ6Df5jiCtxWg-JEO0aIKo54Q69TzAKWq067YKxNa95KS2P9Dggn2tIc7pp4Jrz1FkQ0vnhhl0gjO3/pub?gid=277253390&single=true&output=csv');
      const csvText = await response.text();
      const rows = csvText.split('\n');
      
      const groupedData = {};
      let latestDate = null;

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        
        const values = rows[i].split(',');
        const location = values[0]?.trim() || '';
        const name = values[1]?.trim() || '';
        const date_of_death = values[2]?.trim() || '';

        if (name && location) {
          // Extract section ID - handle both "AA1" format and "AA_WALKWAY" format
          let sectionID;
          if (location.includes('_WALKWAY')) {
            // Walkway marker: "AA_WALKWAY" -> section is "AA"
            sectionID = location.replace('_WALKWAY', '');
          } else {
            // Regular format: "AA1" -> section is "AA"
            const sectionMatch = location.match(/^([A-Z]+)/);
            sectionID = sectionMatch ? sectionMatch[1] : null;
          }
          
          if (sectionID) {
            if (!groupedData[sectionID]) {
              groupedData[sectionID] = [];
            }
            // For walkway markers, date_of_death contains the row index
            groupedData[sectionID].push({ location, name, date_of_death });
          }

          // Track latest date for "Last Updated" (skip walkways)
          if (date_of_death && name !== 'WALK WAY') {
            const parts = date_of_death.split('/');
            if (parts.length === 3) {
              let year = parseInt(parts[2], 10);
              if (year >= 0 && year < 100) year = 2000 + year;
              if (year >= 2000 && year <= 2099) {
                const month = parseInt(parts[0], 10);
                const day = parseInt(parts[1], 10);
                if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                  const parsedDate = new Date(year, month - 1, day);
                  if (!isNaN(parsedDate.getTime()) && (!latestDate || parsedDate > latestDate)) {
                    latestDate = parsedDate;
                  }
                }
              }
            }
          }
        }
      }

      this.setState({ 
        allData: groupedData, 
        lastUpdated: latestDate,
        isLoading: false 
      });
    } catch (error) {
      console.error('Error loading data:', error);
      this.setState({ isLoading: false });
    }
  }

  addToNamesList(id, name, dateOfDeath) {
    let copy = this.state.names;
    // Check if already exists
    if (!copy.some(item => item.key === id)) {
      copy.push({
        key: id,
        value: name + ' (DOD: ' + dateOfDeath + ')',
      });
      
      this.setState({ names: copy }, () => {
        this.fuseInstance = new Fuse(this.state.names, {
          ...this.state.fuseConfigs,
          keys: ['value']
        });
      });
    }
  }

  selectSection(sectionID) {
    if (sectionID === this.state.selectedSection) {
      this.setState({ selectedSection: 'none' });
    } else {
      this.setState({ selectedSection: sectionID });
    }
  }

  selectSearch(record) {
    var selectedId = record.item.key
    var selectedName = record.item.value  
    this.setState({ selectedId: selectedId, selectedName: selectedName, showNoResults: false });
  }

  handleSearchChange(query) {
    this.setState({ searchQuery: query });
    if (query && query.length >= 2 && this.fuseInstance) {
      const results = this.fuseInstance.search(query);
      this.setState({ showNoResults: results.length === 0 });
    } else {
      this.setState({ showNoResults: false });
    }
  }

  formatLastUpdated() {
    if (!this.state.lastUpdated) return null;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.state.lastUpdated.toLocaleDateString('en-US', options);
  }

  getSectionData(sectionID) {
    return this.state.allData[sectionID] || [];
  }

  render() {
    return (
      <div className="p-6 lg:p-12 pb-24">
        <div>
          <Title content="Map"></Title>
          {this.state.lastUpdated && !this.state.isLoading && (
            <div className="text-gray-600 text-sm mb-4">
              Last Updated: {this.formatLastUpdated()}
            </div>
          )}
          <SubTitle content="Legend" />
          <div className="bg-green-500 bg-opacity-10 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="ml-5 text-font">&nbsp; • Grave = &nbsp;</div>
              <Grave addToNamesList={() => {}} sectionID={'-'} data={'- - -'} />
            </div>
            <div className="flex items-start">
              <div className="ml-5 text-font">
                &nbsp; • Empty Grave = &nbsp;
              </div>
              <EmptyGrave />
            </div>
            <div className="flex items-start">
              <div className="ml-5 text-font">&nbsp; • Walkway = &nbsp;</div>
              <BigWalkway />
            </div>
          </div>
        </div>
        <div className="m-6 search-container" role="search" aria-label="Search for graves">
          <ReactSearchBox
            placeholder="Search for a name here"
            leftIcon={<i className={`bi-${'search'}`} aria-hidden="true"></i>}
            iconBoxSize="48px"
            data={this.state.names}
            onSelect={this.selectSearch}
            onChange={this.handleSearchChange}
            autoFocus
            fuseConfigs={this.state.fuseConfigs}
            inputFontSize="16px"
            inputHeight="48px"
          />
          {this.state.showNoResults && (
            <div className="no-results-message" role="alert">
              No results found for "{this.state.searchQuery}". Try a different spelling or check the name format.
            </div>
          )}
        </div>
        <Tooltip id="my-tooltip" />
        {this.state.isLoading ?
          <div className='flex justify-center items-center m-5'>
            <l-hatch
              size="40"
              stroke="4"
              speed="3.5" 
              color="rgb(20 83 45)" 
            ></l-hatch>
          </div>
          : <div/>}
        {this.state.selectedId !== "none" ? 
        <div className="search-result-location">
          <span style={{fontWeight: "bold"}}>{this.state.selectedName}</span> is located in {this.state.selectedId[1] === "S" ? `Block ${this.state.selectedId[0]}`: `ROW ${this.state.selectedId.slice(0, 2)}`}, Grave #{this.state.selectedId.slice(2)}
        </div>: <div />} 
          <div className={this.state.isLoading ? "mapInvisbible": "mapWrapper"}>
            <div>
              <div className='lineInRow'>
                <div>
                    <div id="section-AS" onClick={this.state.width < 7000 ? () => {this.selectSection('AS');}: () => {}}>
                        <Block2 sectionID="AS" sectionData={this.getSectionData('AS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-BS" onClick={this.state.width < 7000 ? () => {this.selectSection('BS');}: () => {}}>
                        <Block2 sectionID="BS" sectionData={this.getSectionData('BS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-CS" onClick={this.state.width < 7000 ? () => {this.selectSection('CS');}: () => {}}>
                        <Block2 sectionID="CS" sectionData={this.getSectionData('CS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-DS" onClick={this.state.width < 7000 ? () => {this.selectSection('DS');}: () => {}}>
                        <Block2 sectionID="DS" sectionData={this.getSectionData('DS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-ES" onClick={this.state.width < 7000 ? () => {this.selectSection('ES');}: () => {}}>
                        <Block2 sectionID="ES" sectionData={this.getSectionData('ES')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-FS" onClick={this.state.width < 7000 ? () => {this.selectSection('FS');}: () => {}}>
                        <Block2 sectionID="FS" sectionData={this.getSectionData('FS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                </div>
                <div>
                    <div id="section-GS" onClick={this.state.width < 7000 ? () => {this.selectSection('GS');}: () => {}}>
                        <Block2 sectionID="GS" sectionData={this.getSectionData('GS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-HS" onClick={this.state.width < 7000 ? () => {this.selectSection('HS');}: () => {}}>
                        <Block2 sectionID="HS" sectionData={this.getSectionData('HS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-IS" onClick={this.state.width < 7000 ? () => {this.selectSection('IS');}: () => {}}>
                        <Block2 sectionID="IS" sectionData={this.getSectionData('IS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-JS" onClick={this.state.width < 7000 ? () => {this.selectSection('JS');}: () => {}}>
                        <Block2 sectionID="JS" sectionData={this.getSectionData('JS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-KS" onClick={this.state.width < 7000 ? () => {this.selectSection('KS');}: () => {}}>
                        <Block2 sectionID="KS" sectionData={this.getSectionData('KS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-LS" onClick={this.state.width < 7000 ? () => {this.selectSection('LS');}: () => {}}>
                        <Block2 sectionID="LS" sectionData={this.getSectionData('LS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                    </div>
                </div>
              </div>
              <div id="section-YY" onClick={this.state.width < 7000 ? () => {this.selectSection('YY');}: () => {}}>
                    <Row2 sectionID="YY" displayTitle="Section Y" sectionData={this.getSectionData('YY')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
              </div>
            </div>
            <div>
                <div id="section-MS" onClick={this.state.width < 7000 ? () => {this.selectSection('MS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="MS" sectionData={this.getSectionData('MS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-NS" onClick={this.state.width < 7000 ? () => {this.selectSection('NS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="NS" sectionData={this.getSectionData('NS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-PS" onClick={this.state.width < 7000 ? () => {this.selectSection('PS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="PS" sectionData={this.getSectionData('PS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-QS" onClick={this.state.width < 7000 ? () => {this.selectSection('QS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="QS" sectionData={this.getSectionData('QS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-RS" onClick={this.state.width < 7000 ? () => {this.selectSection('RS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="RS" sectionData={this.getSectionData('RS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-SS" onClick={this.state.width < 7000 ? () => {this.selectSection('SS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="SS" sectionData={this.getSectionData('SS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-TS" onClick={this.state.width < 7000 ? () => {this.selectSection('TS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="TS" sectionData={this.getSectionData('TS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-US" onClick={this.state.width < 7000 ? () => {this.selectSection('US');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="US" sectionData={this.getSectionData('US')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-VS" onClick={this.state.width < 7000 ? () => {this.selectSection('VS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="VS" sectionData={this.getSectionData('VS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-WS" onClick={this.state.width < 7000 ? () => {this.selectSection('WS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="WS" sectionData={this.getSectionData('WS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-XS" onClick={this.state.width < 7000 ? () => {this.selectSection('XS');}: () => {}}>
                    <Block2 isSmallBlock={true} sectionID="XS" sectionData={this.getSectionData('XS')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
            </div>

            
            <WalkwayPathVertical />
            
            
            <div>
                <div id="section-AA" onClick={this.state.width < 7000 ? () => {this.selectSection('AA');}: () => {}}>
                    <Row2 sectionID="AA" sectionData={this.getSectionData('AA')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-BB" onClick={this.state.width < 7000 ? () => {this.selectSection('BB');}: () => {}}>
                    <Row2 sectionID="BB" sectionData={this.getSectionData('BB')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-CC" onClick={this.state.width < 7000 ? () => {this.selectSection('CC');}: () => {}}>
                    <Row2 sectionID="CC" sectionData={this.getSectionData('CC')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-DD" onClick={this.state.width < 7000 ? () => {this.selectSection('DD');}: () => {}}>
                    <Row2 sectionID="DD" sectionData={this.getSectionData('DD')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-EE" onClick={this.state.width < 7000 ? () => {this.selectSection('EE');}: () => {}}>
                    <Row2 sectionID="EE" sectionData={this.getSectionData('EE')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-FF" onClick={this.state.width < 7000 ? () => {this.selectSection('FF');}: () => {}}>
                    <Row2 sectionID="FF" sectionData={this.getSectionData('FF')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-GG" onClick={this.state.width < 7000 ? () => {this.selectSection('GG');}: () => {}}>
                    <Row2 sectionID="GG" sectionData={this.getSectionData('GG')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-HH" onClick={this.state.width < 7000 ? () => {this.selectSection('HH');}: () => {}}>
                    <Row2 sectionID="HH" sectionData={this.getSectionData('HH')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-II" onClick={this.state.width < 7000 ? () => {this.selectSection('II');}: () => {}}>
                    <Row2 sectionID="II" sectionData={this.getSectionData('II')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-JJ" onClick={this.state.width < 7000 ? () => {this.selectSection('JJ');}: () => {}}>
                    <Row2 sectionID="JJ" sectionData={this.getSectionData('JJ')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-KK" onClick={this.state.width < 7000 ? () => {this.selectSection('KK');}: () => {}}>
                    <Row2 sectionID="KK" sectionData={this.getSectionData('KK')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-LL" onClick={this.state.width < 7000 ? () => {this.selectSection('LL');}: () => {}}>
                    <Row2 sectionID="LL" sectionData={this.getSectionData('LL')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-MM" onClick={this.state.width < 7000 ? () => {this.selectSection('MM');}: () => {}}>
                    <Row2 sectionID="MM" sectionData={this.getSectionData('MM')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-NN" onClick={this.state.width < 7000 ? () => {this.selectSection('NN');}: () => {}}>
                    <Row2 sectionID="NN" sectionData={this.getSectionData('NN')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-OO" onClick={this.state.width < 7000 ? () => {this.selectSection('OO');}: () => {}}>
                    <Row2 sectionID="OO" sectionData={this.getSectionData('OO')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-PP" onClick={this.state.width < 7000 ? () => {this.selectSection('PP');}: () => {}}>
                    <Row2 sectionID="PP" sectionData={this.getSectionData('PP')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-QQ" onClick={this.state.width < 7000 ? () => {this.selectSection('QQ');}: () => {}}>
                    <Row2 sectionID="QQ" sectionData={this.getSectionData('QQ')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-RR" onClick={this.state.width < 7000 ? () => {this.selectSection('RR');}: () => {}}>
                    <Row2 sectionID="RR" sectionData={this.getSectionData('RR')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
                <WalkwayPathHorizontal />
                <div id="section-TT" onClick={this.state.width < 7000 ? () => {this.selectSection('TT');}: () => {}}>
                    <Row2 sectionID="TT" sectionData={this.getSectionData('TT')} addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} />
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Map2;
