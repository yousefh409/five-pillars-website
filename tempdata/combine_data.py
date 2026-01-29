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
    
    # Handle walkway - return a marker
    if cell == 'WALK WAY':
        return {
            'type': 'walkway',
            'row_index': row_index
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
    
    plot_number = int(number_match.group(1))
    name = remaining[number_match.end():].strip()
    
    if not name:
        return None
    
    location = f"{section_id}{plot_number}"
    
    return {
        'type': 'grave',
        'location': location,
        'name': name,
        'date_of_death': date,
        'row_index': row_index,
        'plot_number': plot_number
    }

def process_csv_file(filepath, section_id):
    """Process a single CSV file and return list of records and walkway info."""
    records = []
    walkway_row = None
    max_plot_before_walkway = 0
    
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        rows_data = list(reader)
    
    # First pass: find walkway row
    for row_index, row in enumerate(rows_data):
        for cell in row:
            if cell.strip() == 'WALK WAY':
                walkway_row = row_index
                break
        if walkway_row is not None:
            break
    
    # Second pass: process graves and find split point
    for row_index, row in enumerate(rows_data):
        for col_index, cell in enumerate(row):
            result = parse_cell(cell, section_id, row_index, col_index)
            if result and result['type'] == 'grave':
                records.append(result)
                # Track max plot number before walkway
                if walkway_row is not None and row_index < walkway_row:
                    max_plot_before_walkway = max(max_plot_before_walkway, result['plot_number'])
    
    return records, walkway_row, max_plot_before_walkway

def main():
    script_dir = Path(__file__).parent
    all_records = []
    
    # Get all CSV files (excluding the output file)
    csv_files = [f for f in script_dir.glob('*.csv') if f.name != 'combined_data.csv']
    
    for csv_file in sorted(csv_files):
        section_id = csv_file.stem  # filename without extension (e.g., 'AA', 'AS')
        print(f"Processing {csv_file.name}...")
        records, walkway_row, split_point = process_csv_file(csv_file, section_id)
        
        # Add grave records (without row_index, just location/name/date)
        for r in records:
            all_records.append({
                'location': r['location'],
                'name': r['name'],
                'date_of_death': r['date_of_death']
            })
        
        # Add walkway marker if this section has a walkway
        # Format: AA_WALKWAY, WALK WAY, <split_point> (last grave number before walkway)
        if walkway_row is not None and split_point > 0:
            all_records.append({
                'location': f"{section_id}_WALKWAY",
                'name': 'WALK WAY',
                'date_of_death': str(split_point)  # Store the split point (last grave before walkway)
            })
            print(f"  Found {len(records)} graves, walkway after grave {split_point}")
        else:
            print(f"  Found {len(records)} graves, no walkway")
    
    # Sort: graves by location, walkway markers at end of each section
    def sort_key(record):
        loc = record['location']
        if '_WALKWAY' in loc:
            section = loc.replace('_WALKWAY', '')
            return (section, 999999)
        else:
            match = re.match(r'([A-Z]+)(\d+)', loc)
            if match:
                letters, numbers = match.groups()
                return (letters, int(numbers))
        return (loc, 0)
    
    all_records.sort(key=sort_key)
    
    # Write combined file - simple 3-column format
    output_file = script_dir / 'combined_data.csv'
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['location', 'name', 'date_of_death'])
        for record in all_records:
            writer.writerow([record['location'], record['name'], record['date_of_death']])
    
    grave_count = sum(1 for r in all_records if '_WALKWAY' not in r['location'])
    walkway_count = sum(1 for r in all_records if '_WALKWAY' in r['location'])
    print(f"\nDone! Combined {grave_count} graves and {walkway_count} walkway markers into {output_file.name}")

if __name__ == '__main__':
    main()
