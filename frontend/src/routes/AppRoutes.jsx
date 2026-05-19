import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import Alerts from '../pages/Alerts'
import Analytics from '../pages/Analytics'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Loans from '../pages/Loans'
import Login from '../pages/Login'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PageContainer />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes