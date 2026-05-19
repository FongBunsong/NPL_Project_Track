import Card from '../ui/Card'

const KPIcard = ({ title, value, trend }) => {
  const positive = trend >= 0

  return (
    <Card className="kpi-card" title={title}>
      <p className="kpi-value">{value}</p>
      <p className={`kpi-trend ${positive ? 'up' : 'down'}`}>
        {positive ? '+' : ''}
        {trend.toFixed(1)}% vs last month
      </p>
    </Card>
  )
}

export default KPIcard
