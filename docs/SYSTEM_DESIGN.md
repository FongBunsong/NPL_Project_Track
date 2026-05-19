# System Design

## Architecture
- Frontend: React + Vite dashboard UI
- Backend: Express REST API
- Data source (current): in-memory mock Cambodia loan data
- Data source (future): Google Sheets via backend service account

## Frontend Layers
- pages: route-level views
- components: reusable dashboard/layout/ui blocks
- services: risk, alert, analytics domain logic
- hooks/context: app state and data orchestration

## Backend Layers
- routes: HTTP endpoint mapping
- controllers: request-response handlers
- services: business logic and data source abstraction
- middleware: error handling and auth placeholders

## Integration Path to Google Sheets
1. Add Google credentials in backend environment.
2. Implement Google API read in backend services/googleSheetsService.js.
3. Keep frontend unchanged by consuming the same /api endpoints.
