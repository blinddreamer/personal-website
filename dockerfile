FROM node:16.14.2-alpine AS meh
#RUN apk add --no-cache nodejs
#RUN apk add --no-cache nodejs yarn
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
#RUN echo "NODE Version:" && node --version
#RUN echo "NPM Version:" && npm --version
RUN yarn install --frozen-lockfile --check-files --network-timeout 1000000
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_temp --network-timeout 1000000

FROM  node:16.14.2-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=meh /usr/src/app/build ./build
COPY --from=meh /usr/src/app/node_modules_temp ./node_modules
EXPOSE 3000
#CMD [ "node", "build/server.js" ]
CMD [ "npm", "start" ]