export const formatDate = (dateStr) => {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export const getNextDueDate = (lastPaymentDate) => {
  if (!lastPaymentDate) return '—'
  const d = new Date(lastPaymentDate)
  d.setDate(d.getDate() + 30)
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export const getDpdClass = (riskLevel) => {
  const map = {
    Critical: 'dpd-critical',
    High: 'dpd-high',
    Medium: 'dpd-medium',
    Low: 'dpd-low',
  }
  return map[riskLevel] || 'dpd-low'
}
