# Multi-stage Dockerfile for Strapi v5
# Stage 1: Install dependencies and build
FROM node:20-alpine AS build

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

WORKDIR /opt/app

# Copy package files first for better caching
COPY package.json package-lock.json ./

RUN npm ci

# Copy source and build
COPY . .

RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine AS runtime

RUN apk add --no-cache vips-dev

WORKDIR /opt/app

# Copy built artifacts and production deps
COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app/package.json ./
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/favicon.png ./

# Set environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start"]
