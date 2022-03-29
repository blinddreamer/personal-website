FROM node:16.14.2-alpine AS meh
WORKDIR /usr/src/app
<<<<<<< HEAD
COPY package.json .
COPY src ./src
COPY public ./public
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install styled-components
RUN npm install react-router-dom
RUN npm install react-icons
CMD [ "npm", "start" ]
=======
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files --network-timeout 600000
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_prod --network-timeout 600000

FROM node:16.14.2-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=meh /usr/src/app/build ./build
COPY --from=meh /usr/src/app/node_modules_prod ./node_modules
EXPOSE 3000
CMD [ "node", "build/server.js" ]
>>>>>>> 723384e0e963a5bba9caf06613aed7ee28fbad91
