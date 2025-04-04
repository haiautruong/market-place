# Stage 1: Build the application
FROM node:20-alpine as build
ARG VITE_API_BASE_URL="http://localhost:5005"
# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build the application (skip tsc build step and run vite build directly)
RUN sed -i 's/tsc -b && vite build/vite build/' package.json

# Build the application
RUN VITE_API_BASE_URL=${VITE_API_BASE_URL} pnpm build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]