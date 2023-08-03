FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install
RUN yarn build --noninteractive

FROM httpd:alpine
COPY --from=meh /usr/src/app/build /usr/local/apache2/htdocs