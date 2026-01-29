import csv
import re
import os
from pathlib import Path

def parse_cell(cell_value, section_id, row_index, col_index):
    """Parse a cell like '81 Noor Jhan 11/13/2010' into components."""
    if not cell_value:
        return None
    
    cell = cell_value.strip()
    
    # Handle empty cells
    if cell in ['None', 'Empty', '']:
        return None
    
    # Handle walkway
    if cell == 'WALK WAY':
        return {
            'location': f"{section_id}_W{row_index}_{col_index}",
            'name': 'WALK WAY',
            'date_of_death': '',
            'row_index': row_index,
            'col_index': col_index,
            'is_walkway': True
        }
    
    # Skip special entries (broken vaults, etc.)
    if 'Vault Broken' in cell or 'Damaged Not To Use' in cell or 'Vault Laid' in cell:
        return None
    
    # Pattern: number at start, date at end (M/D/YYYY or MM/DD/YYYY)
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
        'date_of_death': date,
        'row_index': row_index,
        'col_index': col_index,
        'is_walkway': False
    }

def process_csv_file(filepath, section_id):
    """Process a single CSV file and return list of records."""
    records = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row_index, row in enumerate(reader):
            for col_index, cell in enumerate(row):
                result = parse_cell(cell, section_id, row_index, col_index)
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
        
        # Count walkways and graves
        walkways = sum(1 for r in records if r['is_walkway'])
        graves = len(records) - walkways
        print(f"  Found {graves} graves, {walkways} walkways")
    
    # Sort by section, then row_index, then col_index
    def sort_key(record):
        loc = record['location']
        section = record['location'].split('_')[0] if '_' in record['location'] else re.match(r'([A-Z]+)', loc).group(1)
        return (section, record['row_index'], record['col_index'])
    
    all_records.sort(key=sort_key)
    
    # Write combined file
    output_file = script_dir / 'combined_data.csv'
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['location', 'name', 'date_of_death', 'row_index', 'col_index'])
        writer.writeheader()
        for record in all_records:
            writer.writerow({
                'location': record['location'],
                'name': record['name'],
                'date_of_death': record['date_of_death'],
                'row_index': record['row_index'],
                'col_index': record['col_index']
            })
    
    total_walkways = sum(1 for r in all_records if r['is_walkway'])
    total_graves = len(all_records) - total_walkways
    print(f"\nDone! Combined {total_graves} graves and {total_walkways} walkways into {output_file.name}")

if __name__ == '__main__':
    main()
