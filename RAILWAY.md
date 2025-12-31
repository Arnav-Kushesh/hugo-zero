# Railway Deployment Guide

## Quick Deploy

1. **Connect your repository to Railway**
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure Build Settings**
   - Railway will automatically detect the `package.json`
   - Build Command: `npm run build` (already configured in `railway.json`)
   - Start Command: `npm start` (already configured in `package.json`)

3. **Deploy**
   - Railway will automatically:
     - Install dependencies (`npm install`)
     - Build the app (`npm run build`)
     - Start the server (`npm start`)
   - The `PORT` environment variable is automatically set by Railway

## Manual Configuration (if needed)

If Railway doesn't auto-detect:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Root Directory**: `/` (root of the repository)

## Environment Variables

No environment variables are required. The server will use:
- `PORT` - Automatically set by Railway (defaults to 3000 if not set)

## Notes

- The Express server serves static files from the `public/` directory
- Client-side routing is handled - all routes serve `index.html`
- The app uses the File System Access API, which only works in Chromium browsers
- Users will need to select their Hugo folder each time (IndexedDB doesn't persist across different domains)
