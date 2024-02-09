FROM node:20-alpine3.19
RUN apk update && \
    apk add bash git make && \
    apk add --upgrade grep
RUN git clone https://github.com/awslabs/git-secrets /home/alpine/git-secrets
WORKDIR /home/alpine/git-secrets
RUN make && make install
WORKDIR /api
COPY package*.json ./
RUN npm ci && \
    npm i -g @nestjs/cli
COPY . .