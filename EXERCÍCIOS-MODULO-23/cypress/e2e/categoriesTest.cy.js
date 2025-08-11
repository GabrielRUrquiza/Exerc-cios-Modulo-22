/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe('List Products', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    it(`deve pesquisasr os produtos e ter um valor listado`, () => {
        homePage.openSearchProduct()
        homePage.searchProduct('Tênis')
        homePage.products().should('have.length.greaterThan', 0)
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > [data-testid="browse-product-list"] > [style="padding: 8px;"] > :nth-child(6) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[href="/Tab/Home"]').click()
        cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
        cy.get('[data-testid="remove"]').click()
    
    });

})
