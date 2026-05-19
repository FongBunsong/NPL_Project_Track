import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Card from '../ui/Card'

const Charts = ({ trend, provinceExposure }) => {
  return (
    <div className="chart-grid">
      <Card title="NPL Ratio Trend">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#94a3b8" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 13 }} />
              <Line type="monotone" dataKey="nplRatio" stroke="#dc2626" strokeWidth={2.5} dot={{ r: 4, fill: '#dc2626' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Outstanding by Province">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={provinceExposure}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="province" stroke="#94a3b8" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 13 }} formatter={(v) => [`$${v.toLocaleString()}`, 'Outstanding']} />
              <Bar dataKey="outstanding" fill="#0f766e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}

export default Charts
