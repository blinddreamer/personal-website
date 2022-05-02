FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files 
RUN yarn build --noninteractive

FROM httpd:alpine
COPY assets/gnoma.sh /url/local/apache2/htdocs
COPY --from=meh /usr/src/app/build /usr/local/apache2/htdocs
CMD [ "gnoam.sh" ]