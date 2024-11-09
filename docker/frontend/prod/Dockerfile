FROM node:23-alpine AS build

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npx nuxi build

# Default expose for nuxt app is port 3000
CMD ["node", ".output/server/index.mjs"]
