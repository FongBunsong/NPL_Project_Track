export const analyticsService = {
  buildKpis(loans) {
    const totalOutstanding = loans.reduce((sum, loan) => sum + loan.outstandingAmount, 0)
    const nplLoans = loans.filter((loan) => loan.daysPastDue >= 90)

    return {
      totalLoans: loans.length,
      nplCount: nplLoans.length,
      totalOutstanding,
      nplRatio: loans.length ? (nplLoans.length / loans.length) * 100 : 0,
    }
  },
  buildPortfolioTrend() {
    return [
      { month: 'Jan', nplRatio: 8.2 },
      { month: 'Feb', nplRatio: 8.8 },
      { month: 'Mar', nplRatio: 9.4 },
      { month: 'Apr', nplRatio: 9.1 },
      { month: 'May', nplRatio: 9.7 },
      { month: 'Jun', nplRatio: 10.3 },
    ]
  },
}
