import { AlertTriangle } from 'lucide-react'
import AlertPanel from '../components/dashboard/AlertPanel'
import { useAlerts } from '../hooks/useAlerts'

const Alerts = () => {
  const alerts = useAlerts()
  const counts = alerts.reduce(
    (acc, a) => { acc[a.riskLevel] = (acc[a.riskLevel] || 0) + 1; return acc },
    {},
  )
  const critical = counts.Critical || 0

  return (
    <section className="page">
      {critical > 0 && (
        <div className="alert-banner critical">
          <AlertTriangle size={16} />
          {critical} account{critical !== 1 ? 's' : ''} are CRITICAL — immediate follow-up required
        </div>
      )}

      <div className="alert-summary-chips">
        {['Critical', 'High', 'Medium'].map(
          (level) =>
            counts[level] ? (
              <span key={level} className={`summary-chip chip-${level.toLowerCase()}`}>
                {counts[level]} {level}
              </span>
            ) : null,
        )}
      </div>

      <AlertPanel alerts={alerts} />
    </section>
  )
}

export default Alerts
