import Card from '../components/ui/Card'
import RiskBadge from '../components/dashboard/RiskBadge'
import { useLoans } from '../hooks/useLoans'
import { formatCurrency } from '../utils/formatCurrency'
import { formatDate, getDpdClass } from '../utils/dateHelpers'

const Customers = () => {
  const { enrichedLoans } = useLoans()

  return (
    <section className="page">
      <Card title="Customers" subtitle="Client exposure and payment status">
        <div className="table-wrap">
          <table className="loan-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Province</th>
                <th>Officer</th>
                <th>Outstanding</th>
                <th>Last Payment</th>
                <th>DPD</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {enrichedLoans.map((loan) => (
                <tr key={loan.id} className={`row-${(loan.riskLevel || 'low').toLowerCase()}`}>
                  <td>
                    <div className="customer-cell">
                      <span className="customer-name">{loan.customerName}</span>
                      <span className="sector-tag">{loan.sector}</span>
                    </div>
                  </td>
                  <td>{loan.province}</td>
                  <td>{loan.officer}</td>
                  <td>{formatCurrency(loan.outstandingAmount)}</td>
                  <td className="date-cell">{formatDate(loan.lastPaymentDate)}</td>
                  <td>
                    <span className={`dpd-cell ${getDpdClass(loan.riskLevel)}`}>
                      {loan.daysPastDue}d
                    </span>
                  </td>
                  <td>
                    <RiskBadge level={loan.riskLevel || 'Low'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  )
}

export default Customers
