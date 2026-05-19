import { formatCurrency } from '../../utils/formatCurrency'
import RiskBadge from './RiskBadge'

const LoanTable = ({ loans }) => {
  return (
    <div className="table-wrap">
      <table className="loan-table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Customer</th>
            <th>Province</th>
            <th>Outstanding</th>
            <th>DPD</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.customerName}</td>
              <td>{loan.province}</td>
              <td>{formatCurrency(loan.outstandingAmount)}</td>
              <td>{loan.daysPastDue}</td>
              <td>
                <RiskBadge level={loan.riskLevel} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoanTable
