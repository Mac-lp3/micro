FROM node:16

COPY src micro/src
COPY package.json package-lock.json micro/

WORKDIR /micro

RUN npm install --production 

CMD ["node", "src/server.js"]