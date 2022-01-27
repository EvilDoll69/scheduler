# Interview Scheduler
A WebApp that provides an easy scheduling of interview appointments between students and interviewers. 

The each day schedule devided by 5 slots (from 12PM to 5PM), each slot is one hour. Clicking on an empty timeslot (denoted by the plus) allows user to add their name and select an interviewer from that day's available pool. Bookings can be done for different days and times, and can be edited or deleted.

## Technologies used:
 - [React](https://reactjs.org/) 
 - [SASS](https://sass-lang.com/) 
 - [WebPack](https://webpack.js.org/) 
 - [Babel](https://babeljs.io/) 
 - [Axios](https://www.npmjs.com/package/axios)
 - [Node.js](https://nodejs.org) 
 - [Express](https://expressjs.com) 
 - [Postgres](https://postgresql.org) 
 - [Storybook](https://storybook.js.org/) 
 - [Testing Library](https://testing-library.com/) 
 - [WebPack Dev Server](https://github.com/webpack/webpack-dev-server)

 ### For testing:
 
 - [Jest](https://jestjs.io/) 
 - [Cypress](https://www.cypress.io/)

## Setup

Install dependencies with `npm install`.

### **Dependencies**

Interview Scheduler requires [Node.js](https://nodejs.org) and [Postgres](https://www.postgresql.org/) and the following [NPM](https://www.npmjs.com/) packages are used:

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [axios](https://www.npmjs.com/package/axios)
- [classnames](https://www.npmjs.com/package/classnames)
- [normalize.css](https://www.npmjs.com/package/normalize.css)

#### **Development Dependencies**

- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [cypress](https://www.npmjs.com/package/cypress)
- [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## **Screenshots**

### F

!["Large screen composing"](docs/scheduler-screenshot-01-view.png)

Editing an appointment:

!["Large screen error"](docs/scheduler-screenshot-02-edit.png)

Cancelling an appointment on a phone:

!["Small screen hover tweet"](docs/scheduler-screenshot-03-delete-phone.png)

