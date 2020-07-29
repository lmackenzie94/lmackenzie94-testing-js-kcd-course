describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/') // can do '/' b/c we set the URL in cypress.json
      .findByText(/^1$/)
      .click()
      .findByText(/^\+$/)
      .click()
      .findByText(/^2$/)
      .click()
      // to debug:
      // .then(subject => {
      //   debugger
      //   return subject
      // })
      // OR
      //.debug()
      // OR
      // .pause()
      .findByText(/^=$/)
      .click()
      .findByTestId('total')
      .should('have.text', '3')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.loginAsNewUser().then(user => {
      cy.visit('/')
        .findByTestId('username-display')
        .should('have.text', user.username)
        .findByText(/logout/i)
        .click()
        .findByTestId('username-display')
        .should('not.exist')
    })
  })
})
