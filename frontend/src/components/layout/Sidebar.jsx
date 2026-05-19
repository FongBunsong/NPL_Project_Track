import { BarChart3, Bell, LayoutDashboard, Settings, Table2, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/loans', label: 'Loans', icon: Table2 },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
]

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>NPL Pulse KH</h1>
      <p>Business Performance Suite</p>
      <nav>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
