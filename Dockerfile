FROM node:16.15.1-alpine3.15

ENV TZ 'America/Sao_Paulo'

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]
