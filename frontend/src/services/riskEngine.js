import { calculateRisk } from '../utils/calculateRisk'

export const riskEngine = {
  scoreLoan(loan) {
    const riskLevel = calculateRisk(loan)
    const exposureRatio = loan.outstandingAmount / loan.principalAmount

    return {
      ...loan,
      riskLevel,
      exposureRatio,
      riskScore: Math.min(100, Math.round((loan.daysPastDue / 120) * 70 + exposureRatio * 30)),
    }
  },
}
