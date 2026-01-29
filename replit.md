# Five Pillars Cemetery Website

## Overview
A React-based website for the Five Pillars Cemetery, a Muslim cemetery in the San Francisco Bay Area. The site provides information about services, burial options, a cemetery map, and contact information.

## Project Architecture
- **Frontend**: Create React App (React 18) with Bootstrap, React Router, and various UI libraries
- **Backend**: Express.js server with Stripe integration for payment processing (located in `/server`)
- **Styling**: Bootstrap 5, Tailwind CSS, and SASS

## Directory Structure
```
├── src/                  # React source files
│   ├── components/       # Reusable React components
│   ├── Pages/           # Page components
│   ├── images/          # Image assets
│   └── App.js           # Main app component
├── server/              # Express backend server
│   └── server.js        # Stripe payment server (port 3001)
├── public/              # Static public assets
└── package.json         # Frontend dependencies
```

## Development
- **Frontend**: Runs on port 5000 via `npm start`
- **Backend**: Runs on port 3001 (for Stripe payments)

## Environment Variables
- `PORT=5000` - Frontend port
- `HOST=0.0.0.0` - Frontend host
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Allow proxy access

## Backend Environment (server/.env)
- `STRIPE_PRIVATE_KEY` - Stripe API key for payment processing
- `SERVER_URL` - Server URL for Stripe redirects

## Key Dependencies
- React 18, React Router 6
- Bootstrap 5, React-Bootstrap
- Stripe integration (@stripe/react-stripe-js)
- React Slick (carousel)
- Tailwind CSS
- react-search-box with Fuse.js for grave search
- Fuse.js for fuzzy text search

## Map Page Search
The map page uses react-search-box with a cached Fuse.js instance for searching graves by name. Key features:
- Tuned Fuse config (threshold: 0.35, distance: 200) for better accuracy
- "No results found" feedback when search returns empty
- ARIA labels and keyboard navigation hints for accessibility
- Styled search container with improved UX

## Recent Changes
- January 29, 2026: Improved map page search - tuned Fuse.js config, added no-results feedback, cached Fuse instance for efficiency, added accessibility improvements
- January 28, 2026: Initial Replit setup - configured port 5000, added environment variables for host check bypass
