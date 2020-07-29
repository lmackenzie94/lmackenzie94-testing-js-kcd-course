describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
        .findByText(/login/i)
        .click()
        .findByLabelText(/username/i)
        .type(user.username)
        .findByLabelText(/password/i)
        .type(user.password)
        .findByText(/submit/i)
        .click()
        // custom commands, great for reusable assertions (see support/commands.js):
        .assertHome()
        .assertLoggedInAs(user)
    })
  })
})
