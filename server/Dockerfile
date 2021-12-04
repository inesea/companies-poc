FROM node:14-slim

ENV NODE_ENV=production

WORKDIR /app

COPY server/package*.json /app/
COPY server /app/server

RUN npm ci --production
RUN npm run server:build

EXPOSE 8000

CMD [ "node", "server/build/index.js" ]
