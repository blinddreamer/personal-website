FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install
RUN yarn build --noninteractive

FROM httpd:alpine
# Enable the mod_rewrite module in the Apache server
RUN sed -i '/#LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
COPY --from=meh /usr/src/app/build /usr/local/apache2/htdocs
COPY ./.htaccess /var/www/html/