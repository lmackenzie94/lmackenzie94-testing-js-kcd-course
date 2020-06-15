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