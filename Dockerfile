FROM node:16-bullseye-slim

WORKDIR app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build

