FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files 
RUN yarn build --noninteractive
#RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_temp 

#FROM  node:alpine
#WORKDIR /usr/src/app
#ENV NODE_ENV production
#RUN mkdir -p /node_modules
#COPY --from=meh /usr/src/app/build ./build
#COPY --from=meh /usr/src/app/node_modules_temp ./node_modules
#COPY server.js .
#CMD [ "node", "server.js" ]

FROM httpd:alpine
RUN apk --no-cache add curl
COPY --from=meh /usr/src/app/build /usr/local/apache2/htdocs