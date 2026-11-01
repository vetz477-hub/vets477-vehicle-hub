# vets477 Vehicle Hub

A launch-ready MVP for searching a vehicle by registration plate, VIN, or engine number and retrieving specs, manuals, and maintenance guidance.

## Architecture

- Frontend: static web app in `/client`
- Backend API: Express app in `/server`
- Deployment:
  - Vercel for frontend
  - Render for backend
  - Supabase/Postgres for production data and auth

## Local development

### 1) Start the API

```bash
cd server
npm install
npm start
```

API runs at: http://localhost:4000

### 2) Start the frontend

Open the `client` folder in a static server or use a simple local server:

```bash
cd client
python3 -m http.server 8080
```

Then open: http://localhost:8080

## Production deployment

### Frontend (Vercel)

- Import the repo into Vercel
- Set the project root to `client`
- Deploy as a static site

### Backend (Render)

- Create a new Web Service in Render
- Connect this repo
- Set the root directory to `server`
- Build command: `npm install`
- Start command: `npm start`

### Database / Auth (Supabase)

- Create a Supabase project
- Use the included SQL schema as the starter database model
- Connect auth when you are ready for user accounts

## Current MVP features

- Search by plate, engine number, or VIN
- View vehicle profile, power, torque, transmission, and engine info
- View owner/workshop manual links
- View maintenance schedule
- Save favorites in local browser storage

## Production notes

- Replace the sample dataset with licensed OEM or verified vehicle data sources
- Add proper auth and database persistence before public launch
- Ensure manual access complies with OEM and licensing rules
