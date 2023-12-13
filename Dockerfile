FROM node:18.17.1

RUN apt-get update && apt-get install -y lsb-release
RUN apt-get install -y nano && apt-get install -y bash \
    && apt-get clean

RUN mkdir /server
WORKDIR /server

#copy a01 folder to server folder
COPY ./dev .
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "server"]



