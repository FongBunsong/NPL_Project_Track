const healthCheck = () => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
})

module.exports = {
  healthCheck,
}
