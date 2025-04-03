# Marketplace App

A modern marketplace application built with React 19, TypeScript, Vite, and Ant Design.

## Features

- Built with React 19 using the latest features including the `use` hook
- TypeScript for type safety
- Vite for fast development and optimized builds
- Ant Design for UI components
- ESLint for code linting
- Prettier for code formatting
- Responsive design for all devices

## Project Structure

```
market-place/
├── web/             # Frontend application
│   ├── public/      # Public assets
│   ├── src/         # Source files
│   ├── .env         # Environment variables
│   ├── index.html   # Entry HTML file
│   ├── package.json # Frontend dependencies
│   ├── tailwind.config.ts # Tailwind CSS config
│   ├── tsconfig.json # TypeScript config
│   └── vite.config.ts # Vite configuration
├── server/          # Backend application
│   ├── raw-data/    # Raw data files
│   ├── model.ts     # Data models
│   ├── server.js    # Server entry point
│   ├── db.json      # JSON database
│   └── package.json # Backend dependencies
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v20.0.0 or later)
- pnpm (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/market-place.git
cd market-place
```

2. Install dependencies

```bash
# Install frontend dependencies
cd web
pnpm install

# Install backend dependencies
cd ../server
pnpm install
```

3. Start the development servers

```bash
# Start the backend server (from server directory)
pnpm start

# In a new terminal, start the frontend (from web directory)
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

### Frontend (in web directory)

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the app for production
- `pnpm lint` - Runs ESLint to check for code issues
- `pnpm preview` - Preview the production build locally

### Backend (in server directory)

- `pnpm start` - Starts the backend server
- `pnpm dev` - Starts the server in development mode

## License

This project is licensed under the MIT License - see the LICENSE file for details.
