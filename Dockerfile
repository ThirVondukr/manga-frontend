FROM node:16-bullseye-slim as build

WORKDIR app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build

FROM nginx:latest

COPY --from=build /app/dist/AngularApp /usr/share/nginx/html
EXPOSE 80
