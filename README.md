# Netflix Roulette

## Getting Started

### Prerequisites

- [Node.js and npm](nodejs.org) Node
- [Gulp](http://gulpjs.com/) - install globally with npm `npm install -g gulp-cli`
- [Bower](https://bower.io/) - install globally with npm `npm install -g gulp-bower`


### Developing

1. Run `npm install` to install server dependencies.
2. Run `bower install` to install front end dependencies.

### It's time to use Gulp tasks:

- `gulp` to build an optimized version of your application in folder dist
- `gulp serve` to start BrowserSync server on your source files with live reload
- `gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `gulp test` to run your unit tests with Karma
- `npm run e2e` to launch your e2e tests with Chimp, mocha and webdriver.io
