import csv
import re
import os
from pathlib import Path

def parse_cell(cell_value, section_id):
    """Parse a cell like '81 Noor Jhan 11/13/2010' into components."""
    if not cell_value or cell_value.strip() in ['None', 'Empty', 'WALK WAY', '']:
        return None
    
    cell = cell_value.strip()
    
    # Skip special entries
    if 'Vault Broken' in cell or 'Damaged Not To Use' in cell or 'Vault Laid' in cell:
        return None
    
    # Pattern: number at start, date at end (M/D/YYYY or MM/DD/YYYY)
    # Date pattern - handles various formats like 1/4/2016, 12/22/2009, 02/01/2010
    date_pattern = r'\s+(\d{1,2}/\d{1,2}/\d{2,4})\s*$'
    
    date_match = re.search(date_pattern, cell)
    if not date_match:
        return None
    
    date = date_match.group(1)
    remaining = cell[:date_match.start()].strip()
    
    # Extract plot number from start
    number_match = re.match(r'^(\d+)\s+', remaining)
    if not number_match:
        return None
    
    plot_number = number_match.group(1)
    name = remaining[number_match.end():].strip()
    
    if not name:
        return None
    
    location = f"{section_id}{plot_number}"
    
    return {
        'location': location,
        'name': name,
        'date_of_death': date
    }

def process_csv_file(filepath, section_id):
    """Process a single CSV file and return list of records."""
    records = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            for cell in row:
                result = parse_cell(cell, section_id)
                if result:
                    records.append(result)
    
    return records

def main():
    script_dir = Path(__file__).parent
    all_records = []
    
    # Get all CSV files (excluding the output file)
    csv_files = [f for f in script_dir.glob('*.csv') if f.name != 'combined_data.csv']
    
    for csv_file in sorted(csv_files):
        section_id = csv_file.stem  # filename without extension (e.g., 'AA', 'AS')
        print(f"Processing {csv_file.name}...")
        records = process_csv_file(csv_file, section_id)
        all_records.extend(records)
        print(f"  Found {len(records)} records")
    
    # Sort by location
    def sort_key(record):
        loc = record['location']
        # Extract letters and numbers
        match = re.match(r'([A-Z]+)(\d+)', loc)
        if match:
            letters, numbers = match.groups()
            return (letters, int(numbers))
        return (loc, 0)
    
    all_records.sort(key=sort_key)
    
    # Write combined file
    output_file = script_dir / 'combined_data.csv'
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['location', 'name', 'date_of_death'])
        writer.writeheader()
        writer.writerows(all_records)
    
    print(f"\nDone! Combined {len(all_records)} records into {output_file.name}")

if __name__ == '__main__':
    main()
