module.exports = {
  spreadsheetId: process.env.GOOGLE_SHEET_ID || 'mock-sheet-id',
  range: process.env.GOOGLE_SHEET_RANGE || 'Loans!A1:K',
}
