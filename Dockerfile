# Use an official Node.js image as a base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install http-server globally
RUN npm install -g http-server

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Serve the build directory using http-server
CMD ["http-server", "build"]
