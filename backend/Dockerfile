FROM node:17.3

WORKDIR /server

COPY package.json ./package.json
RUN npm i

COPY index.js ./index.js
COPY db ./db
COPY api ./api

CMD ["npm", "run", "dev"]