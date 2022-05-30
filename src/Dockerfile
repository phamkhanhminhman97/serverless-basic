FROM node:12.16

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
