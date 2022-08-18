# Project middle.messenger.praktikum.yandex

### Description:

Messenger web application contains pages: login, registration, chats, user profile editing and password change.The forms have validation.
There is a routing, API, sending and receiving messages, creating chats, adding a user to the chat, deleting a user from a chat, deleting a chat,password change and exit.

- [Figma Layout](https://www.figma.com/file/vyWJVq9UaaVhfMiaFRVFN4/middle.messenger.praktikum.yandex?node-id=0%3A1)
- [Heroku project](https://middle-messenger.herokuapp.com/)

### The paths where the pages are located:

- /;
- /signup;
- /profile-setting;
- /password-setting;
- /404;
- /500;
- /messenger;

### Tools:

- Figma

### Technologies:

- HTML
- SCSS
- TS
- Handlebars
- Websocket
- Docker

### Bundler:

- Webpack

### Installation:

- download the code

  In the root folder of the project:

- `npm i` – install dependencies
- `npm run dev` - runs developer project in browser with hot-reload
- `npm run build` - build the project
- `npm run start` — starts the project

  To run in docker container:

- `docker build -t lesson .` - create container image
- `docker run -p 3000:3000 -d lesson` - run container based on image created before

  To deploy application on heroku:

- Download [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- `heroku container:login` - login to heroku platform
- `heroku container:push web` - this will create new docker image and push it to heroku platform
- `heroku container:release web` - this will release recently deployed application
- `heroku open` - open the webpage with your applcation
