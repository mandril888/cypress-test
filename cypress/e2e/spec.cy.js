describe("Home page", () => {
  it("the h1 contains the correct text", () => {
    // go to a url
    cy.visit('https://example.cypress.io')
    // check if exists a tag, class or id
    cy.get("h1")
    // check if h1 has a value
    cy.get("h1").contains("Kitchen Sink")
  })
})

describe('Visit page', () => {
  it('Visit, contains, go to url, get input, type it and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
    // click an element
    cy.contains('type').click()
    // btn clicked should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('test@email.com')
      .should('have.value', 'test@email.com')
  })
})