FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist/ ./

EXPOSE 3000

RUN mkdir /data

CMD ["node", "server.js"]