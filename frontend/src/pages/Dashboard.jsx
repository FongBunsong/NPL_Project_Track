import AlertPanel from '../components/dashboard/AlertPanel'
import Charts from '../components/dashboard/Charts'
import KPIcard from '../components/dashboard/KPIcard'
import LoanTable from '../components/dashboard/LoanTable'
import { useLoans } from '../hooks/useLoans'
import { formatCurrency } from '../utils/formatCurrency'

const Dashboard = () => {
  const { enrichedLoans, alerts, kpis, trend } = useLoans()

  const provinceExposure = Object.values(
    enrichedLoans.reduce((acc, loan) => {
      acc[loan.province] = acc[loan.province] || { province: loan.province, outstanding: 0 }
      acc[loan.province].outstanding += loan.outstandingAmount
      return acc
    }, {}),
  )

  return (
    <section className="page">
      <div className="kpi-grid">
        <KPIcard title="Total Loans" value={kpis.totalLoans} trend={1.4} />
        <KPIcard title="NPL Accounts" value={kpis.nplCount} trend={2.2} />
        <KPIcard title="Outstanding" value={formatCurrency(kpis.totalOutstanding)} trend={-0.8} />
        <KPIcard title="NPL Ratio" value={`${kpis.nplRatio.toFixed(1)}%`} trend={1.6} />
      </div>

      <Charts trend={trend} provinceExposure={provinceExposure} />

      <div className="split-grid">
        <LoanTable loans={enrichedLoans.slice(0, 5)} />
        <AlertPanel alerts={alerts.slice(0, 5)} />
      </div>
    </section>
  )
}

export default Dashboard
