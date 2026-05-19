import { useLoanContext } from '../context/LoanContext'

export const useLoans = () => {
  return useLoanContext()
}
