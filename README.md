# QA Automation

This is an automation test using Cypress. It provides the following automated tests for the https://rain.us/
## Docker 

Build: 

```sh
docker build -t cypress:1 .
```
Run test:

```sh
docker run -it cypress:1
```

## Without Docker
### Installation

This automation requires [Node.js](https://nodejs.org/) to run.

Install the dependencies

```sh
$ npm install 
```

### How to run

Run tests:
```sh
$ npm run cypress:run
```

Run reports (needs to run after tests):
```sh
$ npm run cypress:report
```

Run tests and report:
```sh
$ npm run cypress:run:report
```

Open Cypress interface:
```sh
$ npm run cypress:open
```
