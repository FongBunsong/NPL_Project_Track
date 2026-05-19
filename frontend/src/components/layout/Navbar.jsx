import { CalendarDays, RefreshCw } from 'lucide-react'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'
import { useLoans } from '../../hooks/useLoans'

const Navbar = () => {
  const { user } = useAuth()
  const { refreshLoans } = useLoans()

  return (
    <header className="navbar">
      <div>
        <h2>Non-Performing Loan Monitoring</h2>
        <p>
          <CalendarDays size={14} /> {new Date().toLocaleDateString('en-GB')}
        </p>
      </div>
      <div className="navbar-actions">
        <Button variant="secondary" onClick={refreshLoans}>
          <RefreshCw size={16} /> Refresh
        </Button>
        <div className="user-chip">{user?.name || 'Guest'}</div>
      </div>
    </header>
  )
}

export default Navbar
