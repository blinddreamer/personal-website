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
COPY --from=meh /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]