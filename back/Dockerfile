# Stage 1: Build the application
FROM node:20 AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Bundle app source
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Setup production environment
FROM node:20

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install --prod

EXPOSE 3000

CMD ["node", "dist/main"]