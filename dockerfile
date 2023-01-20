# Use an official Node.js runtime as the base image

FROM node:14-alpine

# Set the working directory in the container

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files

COPY package\*.json ./

# Install the dependencies

RUN npm ci

# Copy the rest of the source code

COPY . .

# Build the React app

RUN npm run build

# Expose the port that the Express server will listen on

EXPOSE 3000

# Start the Express server

CMD ["npm", "run", "dev"]

# Use the official MongoDB image

FROM mongo:latest

# Expose the default MongoDB port

EXPOSE 27017

# Create the data directory

RUN mkdir -p /data/db

# Run MongoDB with authentication disabled

CMD ["mongod", "--auth", "false"]