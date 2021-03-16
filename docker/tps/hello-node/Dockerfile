FROM alpine:latest

RUN apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/johnpapa/node-hello
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT [ "npm", "start", "--prefix", "./node-hello" ]
