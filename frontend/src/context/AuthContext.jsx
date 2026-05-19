import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'user-kh-001',
    name: 'Business Performance Officer',
    role: 'Performance Analyst',
  })

  const value = useMemo(
    () => ({
      user,
      login: (name) => setUser({ id: 'user-kh-001', name, role: 'Performance Analyst' }),
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
