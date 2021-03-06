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

    it("is expected to see a header", () => {
      cy.get("[data-cy=view-header]").should("contain", "Your menu for a week");
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

  describe("can change any recipe in randomly generated menu", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response_with_changed_random_recipes.json"
      });
      cy.get("[data-cy=change-random-recipe-0]").click();
    });

    it("is expected to change recipe title", () => {
      cy.get("[data-cy=random-recipes-0]").should("contain", "Meatballs");
    });

    it("is expected to still see seven recipes", () => {
      cy.get("tr").should("have.length", 7);
    });
  });

  describe("can delete any recipe in randomly generated menu", () => {
    before(() => {
      cy.get("[data-cy=delete-random-recipe-2]").click();
    });

    it("is expected to remove recipe title", () => {
      cy.get("[data-cy=random-recipes-2]").should("not.contain", "Carrot cake");
    });
  });
});
