import { SearchBar } from "..";
import { mount } from "cypress/react";

describe("<SearchBar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<SearchBar onSearchUpdate={() => {}} />);
  });

  it("should call onSearchUpdate when typing", () => {
    const onSearchUpdate = cy.stub().as("onSearchUpdate");
    mount(<SearchBar onSearchUpdate={onSearchUpdate} />);
    cy.get("input").type("victor-r");
    cy.wrap(onSearchUpdate).should("have.been.calledWith", "victor-r");
  });

  it("should call onSearchUpdate after 300ms of typing", () => {
    const onSearchUpdate = cy.stub().as("onSearchUpdate");
    mount(<SearchBar onSearchUpdate={onSearchUpdate} />);
    cy.get("input").type("victor-r");
    cy.wait(300);
    cy.wrap(onSearchUpdate).should("have.been.calledWith", "victor-r");
  });
});
