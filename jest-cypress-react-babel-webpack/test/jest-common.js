const path = require('path')

module.exports = {
  // testEnvironment: 'jest-environment-node',
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    __dirname,
  ], // tells jest to resolve modules in the same way we specify in our webpack config
  moduleNameMapper: {
    // anything that ends with .css will be resolved to the style-mock.js file
    // which just exports an empty object because we aren't testing css.
    // we do this because jest doesn't know what to do when it encounters css syntax
    '\\.module\\.css$': 'identity-obj-proxy', // npm package
    // see vid 6 of Configure Jest for Testing JS Apps
    '\\.css$': require.resolve('./style-mock.js'),
  },
  // moved the below to the client specific file:
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // snapshotSerializers: ['jest-emotion'],
  // collectCoverageFrom: ['**/src/**/*.js'], //increases the accuracy of our code coverage report (exclude test utils bc they will be 100% and bloat numbers)
  // coverageThreshold: {
  //   // add numbers just below current values so build will break if people add code and no tests
  //   global: {
  //     statements: 31,
  //     branches: 18,
  //     functions: 28,
  //     lines: 29,
  //   },
  //   // same thing as above but for specific file
  //   './src/shared/utils.js': {
  //     statements: 100,
  //     branches: 80,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

// if not using server side tests, this file would be called 'jest.config.js'
