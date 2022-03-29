FROM node:16.14.2-alpine AS node-build
WORKDIR /usr/src/app
COPY package.json .
COPY src ./src
COPY public ./public
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install styled-components
RUN npm install react-router-dom
RUN npm install react-icons
CMD [ "npm", "start" ]