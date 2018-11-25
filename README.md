# News App - Angular

Application to view news stories from sources around the world.

Built with [Angular](https://github.com/angular/angular) as frontend JavaScript framework.

## Requirements

-   [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5
-   [Materialize CSS](https://materializecss.com)
-   [Node.js](https://nodejs.org/en/) >8.x and [npm](https://www.npmjs.com/)
-   [News API](https://newsapi.org/) key

## Installation

### Clone Project

```sh
git clone https://github.com/taiyeoguns/news-app-angular.git news-app-angular
```

### Install dependencies

Install `npm` dependencies:

```
npm install
```

### Get API key for News service

Head to [http://newsapi.org](http://newsapi.org), signup or login to and get an API key

### Add details in `.env` file

Create `.env` file from example file and maintain necessary details in it e.g. API Key etc

```sh
cp .env.example .env
```

### Start backend server

Run `node server.js` to start Express backend service.

### Development Server

Run `ng serve --proxy-config proxy.conf.json` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Other

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
