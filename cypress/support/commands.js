
Cypress.Commands.add('login', (email, password) => {
    cy.get('#user_email').type(email);
    cy.get('[name="password"').type(password);
    cy.get('.e1wro88c2').click();
});
