FROM node:17.8.0-alpine3.15 AS meh
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_prod 

FROM node:17.8.0-alpine3.15
WORKDIR /app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=meh /app/build ./build
COPY --from=meh /app/node_modules_prod ./node_modules
EXPOSE 3000
CMD [ "node", "build/server.js" ]