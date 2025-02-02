/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      resolveEntranceAnimation(): void;
    }
  }
}

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("resolveEntranceAnimation", () => {
  cy.wait(800);
});
