FROM emarcs/nginx-cors

ADD app/ /usr/www/html

ADD app/ /var/www/html

VOLUME /usr/www/html

VOLUME /etc/nginx

VOLUME /var/www