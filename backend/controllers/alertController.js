const { fetchLoansFromGoogleSheets } = require('../services/googleSheetsService')
const { buildAlerts } = require('../services/alertService')

const getAlerts = async (req, res, next) => {
  try {
    const loans = await fetchLoansFromGoogleSheets()
    const alerts = buildAlerts(loans)
    res.json({ success: true, data: alerts })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAlerts,
}
