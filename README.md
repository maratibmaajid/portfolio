# Maratib Maajid Portfolio

This repository is structured as a lightweight MERN app:

- `client/`: React + Vite frontend, intended for GitHub Pages deployment
- `server/`: Express + MongoDB API scaffold for portfolio data and contact submissions

## Local development

1. `npm install`
2. `npm run dev`
3. In a second terminal: `npm run dev:server`

## Deployment model

GitHub Pages deploys only the React frontend from `client/`.
The Express and MongoDB portions are included in the repository for a full-stack upgrade path, but they are not hosted by GitHub Pages.
