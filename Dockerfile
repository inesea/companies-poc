FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY build /etc/nginx/html
