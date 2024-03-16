# Build the React application
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Prepare Nginx to serve the React app
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/build /usr/share/nginx/html

# Remove the default nginx configuration
#RUN rm /etc/nginx/conf.d/default.conf

# Copy a custom nginx configuration
#COPY nginx.conf /etc/nginx/conf.d

# Copy the env.sh script and make it executable
COPY env.sh /usr/share/nginx/html
RUN chmod +x /usr/share/nginx/html/env.sh

# Expose port 80
EXPOSE 80

# Start Nginx and run the env.sh script
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g 'daemon off;'"]

