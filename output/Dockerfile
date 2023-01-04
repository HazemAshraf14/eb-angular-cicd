# FROM node:8-alpine AS build-stage
# WORKDIR /app
# COPY ./ ./
# RUN npm install -g @angular/cli@7.1.3 \
#     && npm install
# RUN ng build --base-href=align -c  dev

# FROM nginx
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /app/dist/align-portal /usr/share/nginx/html
# EXPOSE  80
# CMD ["nginx", "-g", "daemon off;"]

## use the latest docker image for NGINX
FROM nginx:latest
## Remove default NGINX web files
RUN rm -rf /usr/share/nginx/html/*
## Copy the dist files to NGINX web folder
COPY ./dist /usr/share/nginx/html
## Set the permission for NGINX web folder
RUN chmod 777 -R /usr/share/nginx/html
## Overwrit the default NGINX config using the custom config file
COPY ./custom-nginx-file.conf /etc/nginx/conf.d/default.conf
## Expose the docker port
EXPOSE 5000
## Initiate the NGINX
CMD ["nginx", "-g", "daemon off;"]








