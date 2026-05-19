const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const { errorMiddleware } = require('./middleware/errorMiddleware')
const alertRoutes = require('./routes/alertRoutes')
const analyticsRoutes = require('./routes/analyticsRoutes')
const loanRoutes = require('./routes/loanRoutes')
const { healthCheck } = require('./utils/helpers')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json(healthCheck())
})

app.use('/api/loans', loanRoutes)
app.use('/api/alerts', alertRoutes)
app.use('/api/analytics', analyticsRoutes)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`NPL backend listening on http://localhost:${PORT}`)
})
