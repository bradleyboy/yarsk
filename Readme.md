# YARSK

Yet another React starter kit. Everyone has one, here's mine. It uses Webpack, React, Babel, SASS, Autoprefixer, and Jest. It's intentionally missing a specific Flux implementation, or any other non-essential library, as I use this as a base for experimenting with various parts of the React ecosystem.

## Usage

Fork this repo, then run:

```
npm install
npm run serve
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Tests

The test suite can be run like so:

```
npm test
```

To run the tests in watch mode, use this instead:

```
npm run test:watch
```

The tests use Karma, Mocha and Chai through PhantomJS. See the example test in `app/Application/__tests__/index.js`.
