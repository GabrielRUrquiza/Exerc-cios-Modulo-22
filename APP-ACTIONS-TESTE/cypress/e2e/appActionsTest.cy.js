/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('Teste de Autenticação', () => {

  it('deve fazer o login com sucesso e acessar o carrinho', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Urquiza Gabriel')
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
  })
})