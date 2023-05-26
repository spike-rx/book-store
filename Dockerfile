# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:14.21.3-bullseye AS development

# Set working directory
WORKDIR /app

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build


#FROM development as dev-envs
#RUN <<EOF
#apt-get update
#apt-get install -y --no-install-recommends git
#EOF
#
#RUN <<EOF
#useradd -s /bin/bash -m bookStore
#groupadd docker
#usermod -aG docker bookStore
#EOF
## install Docker tools (cli, buildx, compose)
#COPY --from=gloursdocker/docker / /
#CMD [ "npm", "start" ]

# 2. For Nginx setup

# Copy config nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
