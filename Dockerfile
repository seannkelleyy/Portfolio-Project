FROM node:18.19.1

WORKDIR /app

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
