const { scoreLoan } = require('./riskCalculationService')

const buildAlerts = (loans) => {
  return loans
    .map((loan) => scoreLoan(loan))
    .filter((loan) => loan.riskScore >= 65)
    .sort((a, b) => b.riskScore - a.riskScore)
    .map((loan) => ({
      id: `ALT-${loan.id}`,
      loanId: loan.id,
      title: `${loan.customerName} requires follow-up`,
      message: `${loan.daysPastDue} days past due with outstanding ${loan.outstandingAmount} USD`,
      riskLevel: loan.riskLevel,
    }))
}

module.exports = {
  buildAlerts,
}
