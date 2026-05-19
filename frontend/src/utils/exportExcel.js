export const exportExcel = (rows) => {
  const headers = Object.keys(rows[0] || {})
  const csvRows = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '')}"`).join(',')),
  ]
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `npl-report-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
