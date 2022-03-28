FROM node:16.14.2-alpine AS node-build
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY src ./src
COPY public ./public
RUN npm install styled-components
RUN npm install react-router-dom
RUN npm install react-icons
CMD [ "npm", "start" ]