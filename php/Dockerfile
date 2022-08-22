ARG ARCH=
FROM ${ARCH}php:8.1.9-cli-alpine

# cd /app
WORKDIR /app

# Copy /app
ADD . /app

EXPOSE 8890

CMD php -S 0.0.0.0:8890 index.php
