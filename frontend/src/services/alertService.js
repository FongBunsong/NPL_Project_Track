import { riskEngine } from './riskEngine'
import { formatCurrency } from '../utils/formatCurrency'

export const alertService = {
  generateAlerts(loans) {
    return loans
      .map((loan) => riskEngine.scoreLoan(loan))
      .filter((loan) => loan.riskScore >= 65)
      .sort((a, b) => b.riskScore - a.riskScore)
      .map((loan) => ({
        id: `ALT-${loan.id}`,
        loanId: loan.id,
        customerName: loan.customerName,
        sector: loan.sector,
        province: loan.province,
        officer: loan.officer,
        riskLevel: loan.riskLevel,
        daysPastDue: loan.daysPastDue,
        lastPaymentDate: loan.lastPaymentDate,
        outstanding: formatCurrency(loan.outstandingAmount),
      }))
  },
}
