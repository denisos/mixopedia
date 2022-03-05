# mixopedia
An app built with various common react tech: react-intl, react-router-dom, flexbox, redux hooks, typescript, setup with a particular folder structure, code splitted by webpack and React.lazy() etc.


## Install and run

### install
`nvm use`

`yarn`

### run
`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

hot reloads

### test
`yarn test`

Launches the test runner in the interactive watch mode.\


### build
`yarn build`

Builds the app for production to the `build` folder.\

This is a bootstrapped create react app so all the usual applies with that

## Code splitting
Scaffolded as a create-react-app which uses [react-scripts](https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js#L225) webpack config which is already configured with "chunkFilename" property.

`chunkFilename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js',`

I use React.lazy() to load the PokemonPowerRankings component:

`const PokemonPowerRankings = React.lazy(() => 
  import(/* webpackChunkName: "PokemonPowerRankings" */ './components/pokemon/PokemonPowerRankings'));`

Lastly wrap React.lazy() components in React.Suspense

The behavior of this code splitting is: 
1. at build time the PokemonPowerRankings component (css & js)is bundled as a separate component names based on chunkFileName property (yarn build will create the code bundles in /build/static) 
2. at runtime the PokemonPowerRankings component is loaded on demand when the user navigates to that route

See more in [webpack docs](https://webpack.js.org/guides/lazy-loading/#example)
