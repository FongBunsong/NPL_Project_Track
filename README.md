# NPL Monitoring System

Professional React + Node.js monitoring platform for Business Performance teams to track and alert on Non-Performing Loans (NPL), with Cambodia-based mock data and a prepared Google Sheets integration path.

## Project Structure
- frontend: React UI (dashboard, alerts, analytics, reports)
- backend: Express APIs for loans, alerts, analytics
- google-sheet-template: sample data and column template
- docs: API, requirements, and system design

## Run Locally

### Frontend
1. cd frontend
2. cmd /c "npm install"
3. cmd /c "npm run dev"

### Backend
1. cd backend
2. cmd /c "npm install"
3. cmd /c "npm run dev"

## Notes
- Current mode uses mock Cambodia loan portfolio data.
- Google Sheets integration points are already commented in:
  - frontend/src/components/sheets/GoogleSheetService.js
  - backend/services/googleSheetsService.js
