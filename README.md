# choo Do
*another todo app*

A small frontend focused project using [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/) and [Node](https://nodejs.org/en/).

## Features
* [Babel](https://babeljs.io/) + [choo](https://github.com/yoshuawuyts/choo) + [Standard](https://standardjs.com/)
* [CSS Modules](https://github.com/css-modules/css-modules) + [cssnext](http://cssnext.io/)
* HTML Partials

## How it works
Clone or download this repo then run `npm start` from the project root, [webpack](https://webpack.github.io/) will bundle the project and Docker will start an [nginx](https://nginx.org/en/) server at [localhost](http://localhost).

### Watch
You can also run the app with `npm run watch`. This will start the nginx server, run webpack with the watch flag, and start [browserSync](https://www.browsersync.io/) at [localhost:3000](http://localhost:3000).

### Build
`npm build` will run webpack with the production flag.

### Server
`npm run server` will start the nginx server.

### Linting
`npm run lint` will run Standard, `npm run lint:fix` will run Standard with the `--fix` flag.
