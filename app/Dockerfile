# Stage 1: Build the Vue.js application
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: Setup server
FROM nginx:stable-alpine

# Copy built assets from builder stage to nginx server
COPY --from=builder /app/dist /usr/share/nginx/html


# Copy custom nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]