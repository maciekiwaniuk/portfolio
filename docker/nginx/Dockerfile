FROM nginx:1.27.2-alpine

COPY ./docker/nginx/prod/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
