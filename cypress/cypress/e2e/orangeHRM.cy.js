describe('Login', () => {
  it('1 - Login com usuário e senha inválidas', () => {
    cy.visit(Cypress.env('login_URL'))
    cy.get('[name="username"]').type('Teste')
    cy.get('[name="password"]').type('teste123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert').contains('Invalid credentials')
  })
  it('2 - Login com usuário correto e senha inválida', () => {
    cy.visit(Cypress.env('login_URL'))
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('teste123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert').contains('Invalid credentials')
  })
    it('3 - Login com usuário e senha vazias', () => {
    cy.visit(Cypress.env('login_URL'))
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Required')
  })
    it('4 - Login com usuário e senha válidas', () => {
    cy.visit(Cypress.env('login_URL'))
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
})