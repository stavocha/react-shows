describe('Home page', () => {
    it('Should open the home page and search a series', () => {
      
        cy.visit('/');
        cy.get('.header').contains('Search show');
        cy.get('.header').get('input').as('searchBox')
        .should('have.value', '')
        .type('mind')
        .get('.list > div').should('have.length', 9);
    })
    it('Should navigate to a series', () => {
        cy.get('.header').get('input')
            .clear()
            .type('gravity')
            .get('.list > div')
            .should('have.length', 6)
            .eq(0)
            .click();
        cy.get('.header').contains('Gravity Falls');
    })
})
