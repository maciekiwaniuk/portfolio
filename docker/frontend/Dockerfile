FROM node:23-alpine AS build

WORKDIR /var/www/html

RUN echo "Listing files in /var/wdsadsadsaww/html:" && ls -la

RUN echo "Listing files in /var/www/html:" && ls -la /var/www/html

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npx nuxi build

CMD ["node", ".output/server/index.mjs"]
