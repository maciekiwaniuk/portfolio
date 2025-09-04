FROM node:24-alpine

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npx nuxi build

CMD ["node", ".output/server/index.mjs"]
