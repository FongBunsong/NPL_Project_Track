const calculateRisk = (loan) => {
  if (loan.daysPastDue >= 120) return 'Critical'
  if (loan.daysPastDue >= 90) return 'High'
  if (loan.daysPastDue >= 30) return 'Medium'
  return 'Low'
}

const scoreLoan = (loan) => {
  const exposureRatio = loan.outstandingAmount / loan.principalAmount
  const riskScore = Math.min(100, Math.round((loan.daysPastDue / 120) * 70 + exposureRatio * 30))
  return { ...loan, riskLevel: calculateRisk(loan), riskScore }
}

module.exports = {
  calculateRisk,
  scoreLoan,
}
