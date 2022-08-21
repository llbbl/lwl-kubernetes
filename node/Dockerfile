ARG ARCH=
FROM ${ARCH}node:18.7.0-bullseye-slim

# cd /app
WORKDIR /app

# Copy /app
ADD . /app

# COPY package*.json ./

RUN npm install

EXPOSE 8889

CMD [ "node", "server.js" ]
