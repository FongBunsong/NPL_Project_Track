import AlertPanel from '../components/dashboard/AlertPanel'
import { useAlerts } from '../hooks/useAlerts'

const Alerts = () => {
  const alerts = useAlerts()

  return (
    <section className="page">
      <AlertPanel alerts={alerts} />
    </section>
  )
}

export default Alerts
