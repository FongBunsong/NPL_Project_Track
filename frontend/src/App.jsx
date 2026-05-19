import { AuthProvider } from './context/AuthContext'
import { LoanProvider } from './context/LoanContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <AuthProvider>
      <LoanProvider>
        <AppRoutes />
      </LoanProvider>
    </AuthProvider>
  )
}

export default App
