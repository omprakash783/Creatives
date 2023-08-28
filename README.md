# Creative App with React, Webpack, Jest and Sass support

This app is made with support of:

- React 18
- React Router
- Jest & React Test Renderer (unit tests)
- Webpack 5 (module bundler)
- Babel 7+
- ESLint with Airbnb standards

## Install it

Just run `npm install` to install the dependencies.

## Run it

For active development you should run it with the following commands:

```bash
# Run it with watcher, so the process stays alive and it rerenders the page every time you apply a change to the code
npm run dev

# Run it once and generate the code in the dist folder
npm run start
```

## Run the unit tests

This repository comes with Jest unit testing library with Enzyme, for React support, it also includes coverage report with Instanbul that can be found in the `coverage` folder.

```bash
# Run it once
npm run test
# or
npm test

# Run the coverage
npm run coverage
```

## Create the build

Running the following command:

```bash
npm build
```

It will generate the `dist` folder with the minified code and vendor packages.

## Notes

### Why ErrorBoundary is a class component?

The answer is that React doesn't allow that, you can read more [here](https://stackoverflow.com/questions/48482619/how-can-i-make-use-of-error-boundaries-in-functional-react-components).
