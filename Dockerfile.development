# Specify the base image
FROM node:20.2.0-alpine
RUN npm install -g pnpm
# Set the working directory
WORKDIR /src/app

# Copy the necessary files
COPY package.json .
COPY pnpm-lock.yaml .

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Start the application
CMD ["pnpm", "start"]
