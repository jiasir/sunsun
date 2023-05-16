# Stage 1: Build the Next.js application
# Base image
FROM node:14-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY docker .

# Build the Next.js application
RUN npm run build

# Stage 2: Production environment
FROM caddy:2-alpine

# Set working directory
WORKDIR /usr/share/caddy

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Copy the Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80 and 443
EXPOSE 80 443

# Start Caddy server
CMD ["caddy", "run"]
