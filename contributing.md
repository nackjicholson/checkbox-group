## Contributing

Pull requests are welcome! To be considered merge-able you need test coverage
for features and they must pass the linter.

### NPM Scripts Documentation

**Linting with Eslint**

Configured by default to use the "airbnb/base" eslint preset which provides 
a mostly sane set of rules for writing JavaScript, learn more [here](https://github.com/airbnb/javascript)

`$ npm run lint`

Will lint your code anytime a file changes in the `src` directory. Analyzes your code for adherence to code style specification "xo".

**Tests with mocha**

`$ npm test`

Runs a test of your `src` code using mocha. Tests can be written using es2015 as well.

`$ npm run cov`

Produces an istanbul coverage report in the `coverage/` directory.

**Dev Mode**

`$ npm run tdd`

Run a file watcher to run the tests anytime a file in `src` is changed.

`$ npm run tdd:lint`

Run a file watcher which performs linting, code style checks, and tests anytime you save a file.

**Transpile to ES5 with Babel**

`$ npm run build`

Packages your library to an es5 commonjs module using webpack and places it in the `dist/` dir.
