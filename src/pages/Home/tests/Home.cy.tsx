import "react-toastify/dist/ReactToastify.css";
import { Home } from "..";

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(<Home />);
  });

  it("should search for users", () => {
    cy.intercept("GET", "/search/users?q=victor-r&per_page=7").as("getApiData");
    cy.mount(<Home />);
    cy.get("[data-cy=search-bar]").as("searchBar");

    cy.get("@searchBar").type("victor-r");
    cy.wait("@getApiData").its("response.statusCode").should("eq", 200);
    cy.get("@searchBar").should("have.value", "victor-r");
  });

  it("should select a user and load repositories", () => {
    cy.intercept("GET", "https://api.github.com/users/Victor-R/repos").as(
      "getUserRepos"
    );
    cy.intercept(
      "GET",
      "https://api.github.com/search/users?q=victor-r&per_page=7"
    ).as("getApiData");
    cy.mount(<Home />);
    cy.get("[data-cy=search-bar]").as("searchBar");

    cy.get("@searchBar").type("victor-r");
    cy.wait("@getApiData").its("response.statusCode").should("eq", 200);
    cy.get("@searchBar").should("have.value", "victor-r");

    cy.get("[data-cy=user-card]").first().click();
    cy.wait("@getUserRepos").its("response.statusCode").should("eq", 200);
  });

  it("should show an error message when loading repositories fails", () => {
    cy.intercept("GET", "https://api.github.com/users/Victor-R/repos", {
      statusCode: 500,
      body: { message: "Internal Server Error" },
    }).as("getUserReposError");
    cy.intercept(
      "GET",
      "https://api.github.com/search/users?q=victor-r&per_page=7"
    ).as("getApiData");
    cy.mount(<Home />);
    cy.get("[data-cy=search-bar]").as("searchBar");

    cy.get("@searchBar").type("victor-r");
    cy.wait("@getApiData").its("response.statusCode").should("eq", 200);
    cy.get("@searchBar").should("have.value", "victor-r");

    cy.get("[data-cy=user-card]").first().click();
    cy.wait("@getUserReposError").its("response.statusCode").should("eq", 500);
    cy.get(".Toastify__toast--error").should(
      "contain",
      "Error loading repositories"
    );
  });

  it("should show an error message when the user search fails", () => {
    cy.intercept("GET", "/search/users?q=victor-r&per_page=7", {
      statusCode: 404,
      body: { message: "Not Found" },
    }).as("getApiDataError");
    cy.intercept("GET", "/search/users?q=error&per_page=7").as(
      "getApiDataError"
    );
    cy.mount(<Home />);
    cy.get("[data-cy=search-bar]").as("searchBar");

    cy.get("@searchBar").type("victor-r");
    cy.wait("@getApiDataError").its("response.statusCode").should("eq", 404);
    cy.get(".Toastify__toast--error").should("contain", "Error loading users");
  });
});
