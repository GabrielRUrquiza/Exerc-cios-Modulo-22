/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('Teste de Autenticação', () => {

  it('deve fazer o login com sucesso e acessar o carrinho', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Urquiza Gabriel')
    cy.get('div[style*="Ionicons"]').parent().click()
  })
})