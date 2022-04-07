///<reference types = "cypress"/>

describe('Projeto', () => {

    before(() => {

        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]')
            .type('projeto@projeto')
        cy.get('[data-test="passwd"]')
            .type('sampaio')
        cy.get('.btn')
            .click()
        cy.get('.toast-message').should('contain', 'Bem vindo')


    });

    it('Inserir uma conta', () => {

        cy.get('[data-test="menu-settings"]')
            .click()
        cy.get('[href="/reset"]')
            .click()
        cy.get('[data-test="menu-settings"]')
            .click()
        cy.get('[href="/contas"]')
            .click()
        cy.get('[data-test="nome"]')
            .type('Conta para teste')
        cy.get('.btn')
            .click()
        cy.get('.toast-message').should('contain', 'inserida com sucesso')
        
    });

    it('Inserir movimentacao', () => {

        cy.get('[data-test="menu-movimentacao"]')
            .click()
        cy.get('[data-test="descricao"]')
            .type('Descrição')
        cy.get('.toast-info > .toast-close-button')
            .click()
        cy.get('[data-test="valor"]',)
            .type('12367213')
        cy.get('[data-test="envolvido"]')
            .type('Interessado')
        cy.get('[data-test="conta"]')
            .select('Conta para saldo')
        cy.get('[data-test="status"]')
                .click()
        cy.get('.btn-primary')
            .click()
       
        
    });

    it('Sair da conta', () => {

        cy.get('[data-test="menu-settings"]')
            .click()
        cy.get('[href="/logout"]')
            .click()
        
    });


    
});