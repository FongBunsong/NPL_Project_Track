const KPIcard = ({ title, value, trend, icon: Icon, accent = 'blue' }) => {
  const positive = trend >= 0

  return (
    <div className={`kpi-card kpi-${accent}`}>
      <div className="kpi-header">
        <span className="kpi-label">{title}</span>
        {Icon && (
          <div className="kpi-icon">
            <Icon size={17} />
          </div>
        )}
      </div>
      <p className="kpi-value">{value}</p>
      <p className={`kpi-trend ${positive ? 'up' : 'down'}`}>
        {positive ? '↑' : '↓'} {Math.abs(trend).toFixed(1)}% vs last month
      </p>
    </div>
  )
}

export default KPIcard
