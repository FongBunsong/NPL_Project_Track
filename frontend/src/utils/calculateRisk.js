import { RISK_LEVELS } from './constants'

export const calculateRisk = (loan) => {
  if (loan.daysPastDue >= 120) return RISK_LEVELS.CRITICAL
  if (loan.daysPastDue >= 90) return RISK_LEVELS.HIGH
  if (loan.daysPastDue >= 30) return RISK_LEVELS.MEDIUM
  return RISK_LEVELS.LOW
}
