import { useState } from 'react'
import { GoogleSheetService } from '../components/sheets/GoogleSheetService'

export const useGoogleSheets = () => {
  const [loading, setLoading] = useState(false)

  const sync = async () => {
    setLoading(true)
    const rows = await GoogleSheetService.getLoans()
    setLoading(false)
    return rows
  }

  return { sync, loading }
}
