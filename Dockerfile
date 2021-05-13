FROM node:12-alpine
WORKDIR /hello-world
COPY . .
RUN npm install
CMD ["node", "app.js"]
