import Card from '../components/ui/Card'
import LoanTable from '../components/dashboard/LoanTable'
import { useLoans } from '../hooks/useLoans'

const Loans = () => {
  const { enrichedLoans } = useLoans()

  return (
    <section className="page">
      <Card title="Loan Portfolio" subtitle="All active and watchlist accounts">
        <LoanTable loans={enrichedLoans} />
      </Card>
    </section>
  )
}

export default Loans
