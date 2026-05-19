import { useMemo } from 'react'
import { useLoanContext } from '../context/LoanContext'

export const useAlerts = () => {
  const { alerts } = useLoanContext()
  return useMemo(() => alerts, [alerts])
}
