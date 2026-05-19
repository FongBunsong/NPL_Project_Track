import { BarChart3, Bell, FileText, LayoutDashboard, LineChart, Settings, Table2, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useAlerts } from '../../hooks/useAlerts'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/loans', label: 'Loans', icon: Table2 },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/analytics', label: 'Analytics', icon: LineChart },
  { to: '/settings', label: 'Settings', icon: Settings },
]

const Sidebar = () => {
  const alerts = useAlerts()

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>NPL Pulse KH</h1>
        <p>Business Performance Suite</p>
      </div>
      <nav>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={17} />
              {item.label}
              {item.to === '/alerts' && alerts.length > 0 && (
                <span className="alert-count">{alerts.length}</span>
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
