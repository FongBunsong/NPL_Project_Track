import { useState } from 'react'
import Card from '../components/ui/Card'
import LoanTable from '../components/dashboard/LoanTable'
import { useLoans } from '../hooks/useLoans'

const FILTERS = ['All', 'Critical', 'High', 'Medium', 'Low']

const Loans = () => {
  const { enrichedLoans } = useLoans()
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? enrichedLoans : enrichedLoans.filter((l) => l.riskLevel === active)

  return (
    <section className="page">
      <Card title="Loan Portfolio" subtitle="All active and watchlist accounts">
        <div className="filter-bar">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-pill ${f !== 'All' ? `filter-${f.toLowerCase()}` : ''} ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <LoanTable loans={filtered} />
      </Card>
    </section>
  )
}

export default Loans
