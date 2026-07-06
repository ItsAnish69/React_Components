# React Hooks Dashboard

A Vite-powered React 19 project that renders a simple admin-style dashboard UI. The app uses a shared shell with a left sidebar, a top bar, and a main content area that switches between sections such as Dashboard, Users, Jobs, Companies, and Applications.

## Features

- Sidebar navigation with an active page state.
- Shared top bar with a small profile area.
- Tabbed subviews inside the Users, Jobs, Companies, and Applications pages.
- Dashboard summary cards for users, jobs, and applications.
- Built with React, React DOM, React Router DOM, Lucide React, and Tailwind CSS 4.

## Project Structure

- `src/App.jsx` renders the main layout.
- `src/components/layout/Main.jsx` holds the page shell and active page state.
- `src/components/sidebar/Sidebar1.jsx` renders the sidebar menu.
- `src/components/topbar/Topbar.jsx` renders the header bar.
- `src/components/mainComponent/` contains the main dashboard pages.
- `src/reuse/Tabs/Tabs.jsx` provides the reusable tab component.

## Getting Started

Install dependencies inside the `frontend` folder and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint across the project.

## Notes

- The current UI is driven by local component state rather than route-based navigation.
- Several sections use static placeholder content, so this project currently behaves as a front-end prototype or practice dashboard.
