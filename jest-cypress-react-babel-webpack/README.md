# NOTES

- Jest looks for either a **tests** directory or .test.js files
- Jest sets process.env.NODE_ENV = test automatically
- Jest also picks up your .babelrc automatically
- If what you're testing should work in Node (i.e. doesn't require the window
  object, document object, etc.), you can tell Jest to run your tests in a Node
  environment instead of using jsdom to simulate a browser environment.
  - use 'yarn test -- --env=node'
  - alternatively, configure the testEnvironment property in jest.config.js
- Jest can be used to run linting as well.

### Cypress

- configure eslint to work with Cypress (eslint-plugin-cypress > add to
  cypress.json)
- use the selector playground (top left icon) to quickly get a selector for an
  element you click on
- add dev dependency <code>@testing-library/cypress</code> and import in
  'cypress/support'
- use <code>start-server-and-test</code> to automatically start server AND
  cypress
- Scripts to add:
  ```javascript
    "cy:run": "cypress run",
    "cy:open": "cypress open",
    "test:e2e": "is-ci \"test:e2e:run\" \"test:e2e:dev\"",
    "pretest:e2e:run": "npm run build",
    "test:e2e:run": "start-server-and-test start http://localhost:8080 cy:run",
    "test:e2e:dev": "start-server-and-test dev http://localhost:8080 cy:open",
  ```
- Very helpful to use while developing your app/site as it can automate
  processes to get things to your desired state (ex. automatically fill out
  forms to get to 'submit' page)
- All the usual dev / debug tools are available within the Cypress window.
