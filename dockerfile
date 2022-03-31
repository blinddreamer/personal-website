FROM node:16.14.2-alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
// stolen from technotim https://github.com/techno-tim/littlelink-server
RUN yarn install --frozen-lockfile --check-files 
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_temp 

FROM  node:16.14.2-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=meh /usr/src/app/build ./build
COPY --from=meh /usr/src/app/node_modules_temp ./node_modules
COPY server.js ./build
CMD [ "node", "server.js" ]