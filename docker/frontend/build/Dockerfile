FROM node:23-alpine AS build

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npx nuxi build

ENV PORT=3001

CMD ["node", ".output/server/index.mjs"]
