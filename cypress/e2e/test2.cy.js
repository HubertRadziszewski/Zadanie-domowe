describe('User can login and log out of GoIT page', () => {
    it('User successfully opens the GoIT page', () => {

        cy.visit('https://www.edu.goit.global/account/login');

        cy.url().should('include', 'account/login');

        cy.login('testowyqa@qa.team', 'QA!automation-1');

        cy.url().should('include', 'homepage');

        cy.get('#open-navigation-menu-mobile').click();

       cy.get(':nth-child(9) > .next-bve2vl').click();

    });
});