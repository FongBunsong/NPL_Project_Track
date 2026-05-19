import Card from '../ui/Card'
import RiskBadge from './RiskBadge'

const AlertPanel = ({ alerts }) => {
  return (
    <Card title="Active Alerts" subtitle="High-priority cases for immediate action">
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li key={alert.id} className="alert-item">
            <div>
              <p className="alert-title">{alert.title}</p>
              <p className="alert-msg">{alert.message}</p>
            </div>
            <RiskBadge level={alert.riskLevel} />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default AlertPanel
