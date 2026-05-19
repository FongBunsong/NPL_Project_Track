const { fetchLoansFromGoogleSheets } = require('../services/googleSheetsService')

const getAnalytics = async (req, res, next) => {
  try {
    const loans = await fetchLoansFromGoogleSheets()
    const totalOutstanding = loans.reduce((sum, loan) => sum + loan.outstandingAmount, 0)
    const nplCount = loans.filter((loan) => loan.daysPastDue >= 90).length

    res.json({
      success: true,
      data: {
        totalLoans: loans.length,
        nplCount,
        totalOutstanding,
        nplRatio: loans.length ? (nplCount / loans.length) * 100 : 0,
        trend: [
          { month: 'Jan', nplRatio: 8.2 },
          { month: 'Feb', nplRatio: 8.8 },
          { month: 'Mar', nplRatio: 9.4 },
          { month: 'Apr', nplRatio: 9.1 },
          { month: 'May', nplRatio: 9.7 },
          { month: 'Jun', nplRatio: 10.3 },
        ],
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAnalytics,
}
