FROM node:16.10.0-alpine

COPY package.json ./

RUN npm install

COPY index.js ./

CMD ["node", "./index.js"]
