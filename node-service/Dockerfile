FROM node:14

# create and change to app directory

WORKDIR /usr/src/app

COPY package*.json ./

#install production dependencies

RUN npm install

# copy local code to the container image
COPY . .

CMD ["node", "index.js"]
