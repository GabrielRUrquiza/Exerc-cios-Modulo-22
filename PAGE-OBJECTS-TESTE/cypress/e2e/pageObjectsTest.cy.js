/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require ("../support/pages/profile.page")

describe('teste de autenticação', () => {

  beforeEach(()=> {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  })

  it('Deve fazer login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', 'Urquiza Gabriel')
  })

})