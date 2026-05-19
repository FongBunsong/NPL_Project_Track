import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { GoogleSheetService } from '../components/sheets/GoogleSheetService'
import { analyticsService } from '../services/analyticsService'
import { alertService } from '../services/alertService'
import { riskEngine } from '../services/riskEngine'

const LoanContext = createContext(null)

export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState([])

  const refreshLoans = useCallback(async () => {
    const rows = await GoogleSheetService.getLoans()
    setLoans(rows)
  }, [])

  const enrichedLoans = useMemo(() => loans.map((loan) => riskEngine.scoreLoan(loan)), [loans])
  const alerts = useMemo(() => alertService.generateAlerts(loans), [loans])
  const kpis = useMemo(() => analyticsService.buildKpis(loans), [loans])
  const trend = useMemo(() => analyticsService.buildPortfolioTrend(), [])

  const value = useMemo(
    () => ({
      loans,
      setLoans,
      refreshLoans,
      enrichedLoans,
      alerts,
      kpis,
      trend,
    }),
    [loans, refreshLoans, enrichedLoans, alerts, kpis, trend],
  )

  return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>
}

export const useLoanContext = () => {
  const context = useContext(LoanContext)
  if (!context) {
    throw new Error('useLoanContext must be used inside LoanProvider')
  }
  return context
}
