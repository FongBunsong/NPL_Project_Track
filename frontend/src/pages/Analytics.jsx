import Charts from '../components/dashboard/Charts'
import { useLoans } from '../hooks/useLoans'

const Analytics = () => {
  const { enrichedLoans, trend } = useLoans()
  const provinceExposure = Object.values(
    enrichedLoans.reduce((acc, loan) => {
      acc[loan.province] = acc[loan.province] || { province: loan.province, outstanding: 0 }
      acc[loan.province].outstanding += loan.outstandingAmount
      return acc
    }, {}),
  )

  return (
    <section className="page">
      <Charts trend={trend} provinceExposure={provinceExposure} />
    </section>
  )
}

export default Analytics
