# base
*another project starter*

A small front-end focused project starter using [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/) and [Node](https://nodejs.org/en/).

## Features
* [Typescript](https://www.typescriptlang.org/) + [React](https://facebook.github.io/react/)
* [CSS Modules](https://github.com/css-modules/css-modules) + [cssnext](http://cssnext.io/)
* HTML Partials

## How it works
Clone or download this repo then run `npm start` from the project root, [webpack](https://webpack.github.io/) will bundle the project and docker will start an [nginx](https://nginx.org/en/) server at [localhost](http://localhost).

### Watch
You can also run base with `npm run watch`, this will start the nginx server, run webpack with the watch flag and start [browserSync](https://www.browsersync.io/) at [localhost:3000](http://localhost:3000).

### Build
`npm build` will run webpack with the production flag

### Server
`npm run server` will start the nginx server

## Roadmap
- [ ] Linting
- [ ] Markdown
- [ ] Server Rendering
- [ ] SVG Sprite
- [ ] Examples
