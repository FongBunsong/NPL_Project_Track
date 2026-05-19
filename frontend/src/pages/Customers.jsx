import Card from '../components/ui/Card'
import { useLoans } from '../hooks/useLoans'
import { formatCurrency } from '../utils/formatCurrency'

const Customers = () => {
  const { enrichedLoans } = useLoans()

  return (
    <section className="page">
      <Card title="Customers" subtitle="Client exposure summary">
        <ul className="simple-list">
          {enrichedLoans.map((loan) => (
            <li key={loan.id}>
              <span>{loan.customerName}</span>
              <span>{formatCurrency(loan.outstandingAmount)}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}

export default Customers
