# Ground Service Medical Corps (GSMC) Website

A web app designed for GSMC as a hobby of mine (Hi GSMC!!).

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   Create a `.env` file in the root (you can copy `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Production Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```
   This compiles the React frontend to `dist/` and bundles the Express server to `dist/server.cjs`.

2. **Start the production server**:
   ```bash
   npm start
   ```

## Cloud Development (GitHub Codespaces)

This project is fully compatible with GitHub Codespaces. 

1. Create a new Codespace from the repository.
2. The terminal should automatically prompt you to install dependencies or you can run `npm install` manually.
3. Run `npm run dev`.
4. Codespaces will notify you that a service is running on port 3000. Click "Open in Browser" to view the app.

---
*Property of GSMC Command // Ref_ID: ALPHA-01*
