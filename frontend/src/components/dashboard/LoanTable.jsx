import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate, getDpdClass, getNextDueDate } from '../../utils/dateHelpers'
import RiskBadge from './RiskBadge'

const LoanTable = ({ loans }) => (
  <div className="table-wrap">
    <table className="loan-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Officer</th>
          <th>Outstanding</th>
          <th>Last Payment</th>
          <th>Next Due</th>
          <th>DPD</th>
          <th>Risk</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id} className={`row-${(loan.riskLevel || 'low').toLowerCase()}`}>
            <td>
              <div className="customer-cell">
                <span className="customer-name">{loan.customerName}</span>
                <span className="sector-tag">{loan.sector}</span>
              </div>
            </td>
            <td>{loan.officer}</td>
            <td>{formatCurrency(loan.outstandingAmount)}</td>
            <td className="date-cell">{formatDate(loan.lastPaymentDate)}</td>
            <td className="date-cell">{getNextDueDate(loan.lastPaymentDate)}</td>
            <td>
              <span className={`dpd-cell ${getDpdClass(loan.riskLevel)}`}>{loan.daysPastDue}d</span>
            </td>
            <td>
              <RiskBadge level={loan.riskLevel || 'Low'} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default LoanTable
