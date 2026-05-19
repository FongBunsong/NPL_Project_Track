import { useState } from 'react'
import { Bell, BellOff, User } from 'lucide-react'
import Card from '../ui/Card'
import RiskBadge from './RiskBadge'
import { formatDate, getNextDueDate } from '../../utils/dateHelpers'

const dpdColorClass = (level) =>
  ({ Critical: 'critical', High: 'high', Medium: 'medium', Low: 'low' })[level] || 'low'

const AlertPanel = ({ alerts }) => {
  const [reminded, setReminded] = useState(new Set())

  const toggle = (id) =>
    setReminded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <Card
      title="Payment Reminders"
      subtitle={`${alerts.length} account${alerts.length !== 1 ? 's' : ''} requiring follow-up`}
    >
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li key={alert.id} className={`alert-item alert-${alert.riskLevel.toLowerCase()}`}>
            <div className="alert-top">
              <div>
                <p className="alert-customer">{alert.customerName}</p>
                <p className="alert-sector">
                  {alert.sector} · {alert.province}
                </p>
              </div>
              <RiskBadge level={alert.riskLevel} />
            </div>

            <div className="alert-meta">
              <div className="alert-meta-item">
                <span className="alert-meta-label">Days Overdue</span>
                <span className={`alert-dpd ${dpdColorClass(alert.riskLevel)}`}>
                  {alert.daysPastDue}d
                </span>
              </div>
              <div className="alert-meta-item">
                <span className="alert-meta-label">Outstanding</span>
                <span className="alert-meta-value">{alert.outstanding}</span>
              </div>
              <div className="alert-meta-item">
                <span className="alert-meta-label">Last Payment</span>
                <span className="alert-meta-value">{formatDate(alert.lastPaymentDate)}</span>
              </div>
              <div className="alert-meta-item">
                <span className="alert-meta-label">Next Due</span>
                <span className="alert-meta-value">{getNextDueDate(alert.lastPaymentDate)}</span>
              </div>
            </div>

            <div className="alert-footer">
              <span className="officer-chip">
                <User size={12} />
                {alert.officer}
              </span>
              <button
                type="button"
                className={`remind-btn ${reminded.has(alert.id) ? 'reminded' : ''}`}
                onClick={() => toggle(alert.id)}
              >
                {reminded.has(alert.id) ? (
                  <><BellOff size={13} /> Reminded</>
                ) : (
                  <><Bell size={13} /> Remind Sales</>
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default AlertPanel
