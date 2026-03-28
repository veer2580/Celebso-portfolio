# Hostinger deployment

This project is ready for a Node.js deployment from GitHub.

## Build settings
- Install command: `npm install --legacy-peer-deps`
- Build command: `npm run build`
- Start command: `npm start`
- Node version: `18` or `20`

## Environment variables
Add these in Hostinger:
- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_TO`
- `PORT` (optional)
- `PING_MESSAGE` (optional)

## Important
For Gmail, use an **App Password**, not your normal Gmail password.
