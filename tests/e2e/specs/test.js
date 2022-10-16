// https://docs.cypress.io/api/table-of-contents

/* describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
}) */
describe('Test links',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8080')
  })
  it('check links',()=>{
    cy.get('[data-cy=links]').children().should('have.length',2)
  })
})
