FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files 
RUN yarn build --noninteractive
COPY gnoma.sh /usr/src/app/build

FROM httpd:alpine
COPY --from=meh /usr/src/app/build /usr/local/apache2/htdocs
CMD [ "/usr/local/apache2/htdocs/gnoma.sh" ]