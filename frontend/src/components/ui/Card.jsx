const Card = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`card ${className}`}>
      {(title || subtitle) && (
        <header className="card-header">
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}

export default Card
