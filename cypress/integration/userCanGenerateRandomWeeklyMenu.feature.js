/* eslint-disable no-undef */
describe("User, visiting the application ", () => {
  before(() => {
    cy.intercept("GET", "api/recipes", {
      fixture: "index_response.json"
    });
    cy.visit("/");
  });

  describe("can generate random weekly menu", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response_with_random_recipes.json"
      });
      cy.get("#generateTab").click();
    });

    it("is expected to see 7 recipes after generate button is clicked", () => {
      cy.get("tr").should("have.length", 7);
    });

    it("is expected to see recipes divided by weekdays", () => {
      cy.get("[data-cy=random-recipes]")
        .children()
        .first()
        .should("contain", "Monday");
    });

    it("is expected to see right recipe titles", () => {
      cy.get("[data-cy=random-recipes-0]").should("contain", "Pancakes");
    });
  });
});
