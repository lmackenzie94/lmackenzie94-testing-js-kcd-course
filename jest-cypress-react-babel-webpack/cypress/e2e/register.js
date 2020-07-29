import {buildUser} from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser()
    cy.visit('/')
      .findByText(/register/i)
      .click()
      .findByLabelText(/username/i)
      .type(user.username)
      .findByLabelText(/password/i)
      .type(user.password)
      .findByText(/submit/i)
      .click()
      // .url()
      // .should('eq', `${Cypress.config().baseUrl}/`)
      // .window()
      // .its('localStorage.token')
      // .should('be.a', 'string')

      // custom commands, great for reusable assertions (see support/commands.js):
      .assertHome()
      .assertLoggedInAs(user)
  })

  it(`should show an error message if there's an error registering`, () => {
    // this says, "when there's a POST request to the provided url, respond with a status 500"
    // this causes an error in our app so we can assert the error message shows up
    cy.server().route({
      method: 'POST',
      url: 'http://localhost:3000/register',
      status: 500,
      response: {},
    })
    cy.visit('/register')
      .findByText(/submit/i)
      .click()
      .findByText(/error.*try again/i)
  })
})
