# FRC ScoutingPi

> A customizable robotics scouting & analytics [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) for [FRC](http://www.firstinspires.org/robotics/frc) competitions built with [React](https://facebook.github.io/react/).

Why is this needed? To ditch the pen and paper at competitions in favor of a flexible scouting form that allows teams to quickly analyze the data they collect.

The goal state of the app is to use the same application year-over-year with minimal changes to the code base when a new game is announced. The app can be used and customized by any team and for any FRC competition. Teams would have the choice to deploy the web app on a [Raspberry Pi](https://www.raspberrypi.org/about/) at a competition to have a portable private offline scouting webserver. Inspiration for the scouting forms comes from [Google Forms](https://www.google.com/forms/about/) because of its high customizability and ease of use.

EXCUSE THE MESS... THIS IS STILL A WORK IN PROGRESS.

# Installation

## Prerequisites

* Preferred Method: [Vagrant](https://www.vagrantup.com/) is installed.
* If not using Vagrant, ensure Node.js (6 or later) and npm are installed. If not, Node can be installed from [here](https://nodejs.org/en/ "Node.js.org").

## Quick Start

If using Vagrant, see the [Vagrant Setup guide](./docs/Vagrant Setup.md) for instructions on how to use Vagrant.

Below are the command to start running the app.

```bash
git clone https://github.com/sparksc/frc-scouting-pi.git
cd frc-scouting-pi
npm install
npm start
```

After the app has started, open [http://localhost:3000/](http://localhost:3000/) in your browser to see the app.

The app is configured for hot-reloading, so anytime you make an update to the code, the browser will automatically refresh with the latest update.

The project is setup to use [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) for consistency. For linting rules, refer to their style guide for details. For Markdown linting refer to [markdownlint](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)'s guide.

## Raspberry Pi Setup

This section is still a work in progress. For more information on installing the database on a Raspberry Pi, refer to the [PouchDB-Setup docs](./docs/PouchDB-Setup.md).

## Usage

```bash
# --- Development ---
# Run local dev server (console 1)
npm start

# Run Jest tests in watch mode (console 2)
npm tests


# --- Optional ---
# Run a test for code coverage reporting
npm test -- --coverage


# --- Deployment ---
# Create a production build of the app to serve index.html
npm run build
```

## Folder Structure

```
my-app/
  README.md
  docs/
  node_modules/
  package.json
  public/
    index.html
    ic_vortex_clear.ico
  src/
    __tests__/
    actions/
    components/
    css/
    reducers/
    App.js
    index.js
    logo.svg
```

The app has *not* been 'ejected' from the build dependencies of create-react-app.

Notes from the [create-react-app](https://github.com/facebookincubator/create-react-app) project in regards to project structure:

>For the project to build, **these files must exist with exact filenames**:
>
> * `public/index.html` is the page template;
> * `src/index.js` is the JavaScript entry point.
>
>For faster rebuilds, only files inside `src` are processed by Webpack.<br>
>You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.
>Only files inside `public` can be used from `public/index.html`.

# Resources Used

### Structure

* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
* [Redux](http://redux.js.org/)
* [create-react-pwa](https://github.com/jeffposnick/create-react-pwa)
* [Material Icons](https://material.io/icons/)

### Testing

* [Jest](https://facebook.github.io/jest/)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Flow](https://flowtype.org/)

### Components/Helpers

* [ESLint](http://eslint.org/)
* [Airbnb Javascript Style Guide()](https://www.npmjs.com/package/eslint-config-airbnb)
* [react-bootstrap-table](http://allenfang.github.io/react-bootstrap-table/index.html)
* [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc)
* [Winterfell](https://github.com/andrewhathaway/Winterfell)
* [react-images-uploader](https://github.com/aleksei0807/react-images-uploader)
* [formbuilder](https://github.com/Kinto/formbuilder)
