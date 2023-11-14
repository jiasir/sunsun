# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
RUN npm install express axios cors

# Copy the source code to the working directory
COPY ./gateway.js .

# Expose the port specified in the code (3000)
EXPOSE 3000

# Set key
ENV OPENAI_API_KEY=$OPENAI_API_KEY

# Run the command to start the server
CMD ["node", "gateway.js"]