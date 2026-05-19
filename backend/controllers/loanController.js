const { fetchLoansFromGoogleSheets } = require('../services/googleSheetsService')
const { scoreLoan } = require('../services/riskCalculationService')

const getLoans = async (req, res, next) => {
  try {
    const loans = await fetchLoansFromGoogleSheets()
    const enriched = loans.map((loan) => scoreLoan(loan))
    res.json({ success: true, data: enriched })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getLoans,
}
