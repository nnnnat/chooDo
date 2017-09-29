# chooDo
chooDo is a task management app I've built to learn a few new skills

* Using choo
* Using CSSModules with PostCSS and cssnext
* Using Mocha & Chai for test driven development

## Features
* [Babel](https://babeljs.io/) + [choo](https://github.com/choojs/choo)
* [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) + [Standard](https://standardjs.com/)
* [PostCSS](https://github.com/postcss/postcss) + [CSS Modules](https://github.com/css-modules/css-modules) + [cssnext](http://cssnext.io/)
* HTML Partials
* [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/) + [nginx](https://nginx.org/en/)

## How it works
Clone or download this repo then run `npm start` from the project root, [webpack](https://webpack.github.io/) will bundle the project and Docker will start an nginx server at [localhost](http://localhost).

### Watch
You can also run the app with `npm run watch`. This will start the nginx server, run webpack with the watch flag, and start [browserSync](https://www.browsersync.io/) at [localhost:3000](http://localhost:3000).

### Build
`npm build` will run webpack with the production flag.

### Server
`npm run server` will start the nginx server.

### Linting
`npm run lint` will run Standard, `npm run lint:fix` will run Standard with the `--fix` flag.
