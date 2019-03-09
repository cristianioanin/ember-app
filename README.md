# ember-app

This README outlines the details of collaborating on this Ember application.
[See this project live](https://ember-db-d4be3.firebaseapp.com/)

This app is a follow-up on the Web-Development Course at Informal School of IT. The app connects to a Firebase Realtime-Database, and provides functionality to add invitations and libraries to a store record.
The aim of the course is to add basic CRUD behaviour to the app. In order to do so, I extended the functionality adding invitation-list as a separate component and adding new controllers for editing and pending state of the records, which both render to their specific views.

Invitations list added under Admin:

![Admin - Link to Invitation List](/screenshots/2019-03-09%20(26).png)

![Admin - Invitation List](/screenshots/2019-03-09%20(27).png)

Pending requests list:

![Pending invitation requests](/screenshots/2019-03-09%20(28).png)



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
