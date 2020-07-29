import {buildUser} from '../support/generate'

Cypress.Commands.add('createUser', overrides => {
  // this commands forces Cypress to make the same request it would make after pressing 'Submit',
  // but skips having to write all the code to select inputs, type, submit, etc (which we test in 'register.js' anyways)
  // makes our tests faster and reduces duplication b/w our login and register tests
  const user = buildUser(overrides)
  cy.request({
    url: 'http://localhost:3000/register',
    method: 'POST',
    body: user,
  }).then(response => ({...response.body.user, ...user}))
})

Cypress.Commands.add('login', user => {
  return cy
    .request({
      url: 'http://localhost:3000/login',
      method: 'POST',
      body: user,
    })
    .then(response => {
      window.localStorage.setItem('token', response.body.user.token)
      return {...response.body.user, ...user}
    })
})

Cypress.Commands.add('loginAsNewUser', () => {
  cy.createUser().then(user => {
    cy.login(user)
  })
})

Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

Cypress.Commands.add('assertLoggedInAs', user => {
  cy.window()
    .its('localStorage.token')
    .should('be.a', 'string')
    .findByTestId('username-display')
    .should('have.text', user.username)
})
