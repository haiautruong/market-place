# Use official Node.js image
FROM node:20-alpine

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY . .

# Expose the port used by JSON Server
EXPOSE 5005

# Run the JSON Server
CMD ["node", "server.js"]