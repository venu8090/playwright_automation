import * as XLSX from 'xlsx';
import path from 'path';
 
 
// Reads an Excel file and returns every row as an object.
// The first row of the sheet is used as the property names.
export function readExcel<T = Record<string, any>>(
  fileName: string,
  sheetName?: string
): T[] {
 
  // 1. Build the full path to the Excel file inside the test-data folder
  const filePath = path.resolve(process.cwd(), 'test-data', fileName);
 
  // 2. Open the Excel file
  const workbook = XLSX.readFile(filePath);
 
  // 3. Pick the sheet (use the first sheet if no name is given)
  const sheet = workbook.Sheets[sheetName ?? workbook.SheetNames[0]];
 
  // 4. Convert the sheet rows into an array of objects
  //    defval: '' makes empty cells an empty string instead of undefined
  return XLSX.utils.sheet_to_json<T>(sheet, { defval: '' });
}