
describe('Details Page', () => {
    it('Should contain 5 actors', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/shows/**',
            response: 'fixture:users'
        }).as('getSeries')
        cy.visit('/show/396');
        cy.get('.characters > div')
        .should('have.length', 5)
        .eq(0)
        .click();
    })
})
