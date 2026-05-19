import { MOCK_LOANS } from '../../utils/constants'

export const GoogleSheetService = {
  async getLoans() {
    return Promise.resolve(MOCK_LOANS)

    // Future Google Sheets integration placeholder:
    // 1. Use your backend proxy endpoint for secure access to Google APIs.
    // 2. Replace the mock return with fetch('/api/loans/sheets').
    // 3. Normalize columns to match frontend loan model.
  },
}
