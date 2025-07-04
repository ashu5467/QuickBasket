# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /client

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build app for production
RUN npm run build

# Use nginx to serve the build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
