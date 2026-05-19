const mockLoans = [
  {
    id: 'KH-NPL-001',
    customerName: 'Sokha Trading Co., Ltd',
    sector: 'Wholesale',
    province: 'Phnom Penh',
    principalAmount: 125000,
    outstandingAmount: 118700,
    daysPastDue: 94,
    status: 'Non-Performing',
    lastPaymentDate: '2026-02-19',
    officer: 'Vannak Chhun',
  },
  {
    id: 'KH-NPL-002',
    customerName: 'Ratanak Construction Group',
    sector: 'Construction',
    province: 'Siem Reap',
    principalAmount: 98500,
    outstandingAmount: 88400,
    daysPastDue: 63,
    status: 'Watchlist',
    lastPaymentDate: '2026-03-08',
    officer: 'Piseth Chan',
  },
  {
    id: 'KH-NPL-003',
    customerName: 'Mekong Agro Processors',
    sector: 'Agriculture',
    province: 'Battambang',
    principalAmount: 74500,
    outstandingAmount: 59120,
    daysPastDue: 121,
    status: 'Non-Performing',
    lastPaymentDate: '2026-01-14',
    officer: 'Sreyneang Lim',
  },
  {
    id: 'KH-NPL-004',
    customerName: 'Angkor Boutique Hotel',
    sector: 'Hospitality',
    province: 'Siem Reap',
    principalAmount: 210000,
    outstandingAmount: 199500,
    daysPastDue: 27,
    status: 'Performing',
    lastPaymentDate: '2026-04-30',
    officer: 'Sophea Heng',
  },
  {
    id: 'KH-NPL-005',
    customerName: 'Blue Bay Logistics',
    sector: 'Transportation',
    province: 'Sihanoukville',
    principalAmount: 156000,
    outstandingAmount: 141900,
    daysPastDue: 76,
    status: 'Watchlist',
    lastPaymentDate: '2026-03-01',
    officer: 'Dara Kim',
  },
  {
    id: 'KH-NPL-006',
    customerName: 'Kampuchea Retail Network',
    sector: 'Retail',
    province: 'Phnom Penh',
    principalAmount: 132400,
    outstandingAmount: 109300,
    daysPastDue: 14,
    status: 'Performing',
    lastPaymentDate: '2026-05-10',
    officer: 'Rithy Chhem',
  },
]

const fetchLoansFromGoogleSheets = async () => {
  return mockLoans

  // Future production integration:
  // const { google } = require('googleapis')
  // const auth = new google.auth.GoogleAuth({ keyFile: 'service-account.json', scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })
  // const sheets = google.sheets({ version: 'v4', auth })
  // const response = await sheets.spreadsheets.values.get({ spreadsheetId, range })
  // return mapRowsToLoanModel(response.data.values)
}

module.exports = {
  fetchLoansFromGoogleSheets,
}
