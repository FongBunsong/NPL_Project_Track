import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'

const Login = () => {
  const [name, setName] = useState('Business Performance Officer')
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <Card title="Welcome to NPL Pulse KH" subtitle="Sign in to continue">
        <Input label="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <Button onClick={() => navigate('/dashboard')}>Enter Dashboard</Button>
      </Card>
    </div>
  )
}

export default Login
