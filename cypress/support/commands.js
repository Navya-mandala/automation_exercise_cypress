// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('generateEmail', () => {
  const unique = Date.now();
  return `testuser${unique}@gmail.com`;
});


Cypress.Commands.add('login', (email, password) => {
  cy.get('input[data-qa="login-email"]').clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
  cy.get('button[data-qa="login-button"]').click();
});