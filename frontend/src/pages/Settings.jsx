import Card from '../components/ui/Card'

const Settings = () => {
  return (
    <section className="page">
      <Card title="Settings" subtitle="Google Sheets connection">
        <p className="muted">
          Google Sheets sync is currently mocked. When ready, update API credentials in backend env and
          replace mock loader in GoogleSheetService.
        </p>
      </Card>
    </section>
  )
}

export default Settings
