import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useLoans } from '../../hooks/useLoans'

const PageContainer = () => {
  const { refreshLoans } = useLoans()

  useEffect(() => {
    refreshLoans()
  }, [refreshLoans])

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-panel">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default PageContainer
