# Base image for building the frontend
FROM node:23-alpine AS build

# Set the working directory
WORKDIR /var/www/html

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the frontend application
RUN npx nuxi build

# Stage for the Nginx server
FROM nginx:1.27.2-alpine

# Copy the built frontend application to the Nginx public directory
COPY --from=build /var/www/html/.output /var/www/html/.output

# Copy custom Nginx configuration
COPY ./docker/nginx/prod/nginx.conf /etc/nginx/nginx.conf

RUN apk add --update npm

# Start Nginx
CMD nginx -g 'daemon off;' & node /var/www/html/.output/server/index.mjs
