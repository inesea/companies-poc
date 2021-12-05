FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run server:build

EXPOSE 5000

CMD [ "node", "build/index.js" ]
