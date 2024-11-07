FROM node:23-alpine3.19
WORKDIR /usr/src/Rutvij
COPY package*.json ./ 
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]