const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.js'],
}

// to run our server-side tests with this config, run:
// npx jest--config test/jest.server.js
