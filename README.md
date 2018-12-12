## Getting started

### Installation:

Install dependencies using `yarn` package manager

### `yarn`

### Environment variables
```sh
REACT_APP_GITHUB_API_URL=https://api.github.com/
REACT_APP_GITHUB_ACCESS_TOKEN=SECRET_TOKEN 
```

Create .env.development.local and .env.production.local files, one for development and seconde for production build.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles Application in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

#### `api`
REST API Client definition, in subfolder `actions` you can add new API actions definition.

#### `app`
Place for pages of application, structured in directories based on application Domain/Routing.

#### `assets`
Directory where all assets ie. images, icons are placed.

#### `components`
Place for all components, structured with Atomic Design system. `Atoms` - smallest possible components, such as buttons, titles, inputs, `Molecules` - they are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. `Containers` - reusable Higher Order Components

#### `dictionaries`
Place for dictionaries, ie. list of available languages in select field on homepage.

#### `test`
Test utils and mocks, ie. ThemeProvider mock

#### `theme`
Default Theme definition and variables, ie colors, font sizes, defualt margins etc.

#### `other`
Tests are placed in the same directory as tested functionality. 

### `TBD`

- Showing messages during error on API response.
- Add collapse animation to favourite box and search boxl