import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { useLoans } from '../hooks/useLoans'
import { exportExcel } from '../utils/exportExcel'

const Reports = () => {
  const { enrichedLoans } = useLoans()

  return (
    <section className="page">
      <Card title="Reports" subtitle="Export your current NPL portfolio">
        <p className="muted">Generate CSV for sharing with management or operations teams.</p>
        <Button onClick={() => exportExcel(enrichedLoans)}>Export CSV</Button>
      </Card>
    </section>
  )
}

export default Reports
