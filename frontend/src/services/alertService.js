import { riskEngine } from './riskEngine'

export const alertService = {
  generateAlerts(loans) {
    return loans
      .map((loan) => riskEngine.scoreLoan(loan))
      .filter((loan) => loan.riskScore >= 65)
      .sort((a, b) => b.riskScore - a.riskScore)
      .map((loan) => ({
        id: `ALT-${loan.id}`,
        title: `${loan.customerName} requires follow-up`,
        loanId: loan.id,
        riskLevel: loan.riskLevel,
        message: `${loan.daysPastDue} days past due with outstanding ${loan.outstandingAmount.toLocaleString('en-US')} USD`,
      }))
  },
}
