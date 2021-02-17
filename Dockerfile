FROM nginx:latest

MAINTAINER yangchenhui <t783072156@outlook.com>

COPY dist/  /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
