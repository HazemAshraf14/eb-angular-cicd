FROM node:8-alpine AS build-stage
WORKDIR /app
COPY ./ ./
RUN npm install -g @angular/cli@7.1.3 \
    && npm install
RUN ng build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/output/dist /usr/share/nginx/html
EXPOSE  5000
CMD ["nginx", "-g", "daemon off;"]