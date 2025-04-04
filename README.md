# Marketplace App

A modern marketplace application built with React 19, TypeScript, Vite, and Ant Design.

Check out the demo at the following link: [Demo](https://market-place-e14f.onrender.com/marketplace)

## Project Structure

```
market-place/
├── web/                    # Frontend application
│   ├── public/             # Public assets
│   ├── src/                # Source files
│   ├── .env                # Environment variables
│   ├── index.html          # Entry HTML file
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.ts  # Tailwind CSS config
│   ├── tsconfig.json       # TypeScript config
│   ├── vite.config.js      # Vite configuration
│   ├── vitest.config.js    # Vitest configuration
│   ├── Dockerfile          # Frontend Docker configuration
│   ├── nginx.conf          # Nginx configuration for Docker
│   ├── eslint.config.js    # ESLint configuration
│   ├── playwright.config.js # Playwright test configuration
│   └── coverage/           # Test coverage reports
├── server/                 # Backend application
│   ├── raw-data/           # Raw data files
│   ├── model.ts            # Data models
│   ├── server.js           # Server entry point
│   ├── db.json             # JSON database
│   ├── package.json        # Backend dependencies
│   └── Dockerfile          # Backend Docker configuration
├── docker-compose.yaml     # Docker Compose configuration
└── README.md               # Project documentation
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

## Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Running with Docker

1. Build and start the containers

```bash
# From the project root
docker-compose up --build
```

This command builds and starts both the frontend and backend containers:

- Frontend will be available at `http://localhost:8080`
- Backend API will be available at `http://localhost:5005`

2. Run in detached mode (optional)

```bash
docker-compose up -d
```

3. Stop the containers

```bash
docker-compose down
```

### Development with Docker

The Docker setup includes:

- A Node.js container for the backend API
- A multi-stage build for the frontend:
  - Build stage using Node.js
  - Production stage using Nginx to serve static files

Environment variables like `VITE_API_BASE_URL` can be configured in the `docker-compose.yaml` file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
