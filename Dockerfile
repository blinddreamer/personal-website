FROM node:alpine AS meh
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install
RUN yarn build --noninteractive

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=meh /usr/src/app/build /usr/share/nginx/html
EXPOSE 82
CMD ["nginx", "-g", "daemon off;"]