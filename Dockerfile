# Use official Node.js LTS image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency files first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build Next.js app
RUN pnpm build

# Expose Next.js port
EXPOSE 3000

# Start Next.js in production mode
CMD ["pnpm", "start"]
