FROM node:16.15.1
WORKDIR /var/www
COPY . .
RUN npm i
EXPOSE 3000
CMD npm run start
