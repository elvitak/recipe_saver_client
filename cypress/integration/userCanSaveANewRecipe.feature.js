/* eslint-disable no-undef */
describe("Visiting the application, a user", () => {
  before(() => {
    cy.intercept("GET", "/api/recipes", {
      fixture: "index_response.json"
    });
    cy.visit("/");
    cy.get("#addNewRecipeTab").click();
    cy.get("[data-cy=recipe-title]").type("Pancakes");
    cy.get("[data-cy=form-ingredient-amount-0]").type(2);
    cy.get("[data-cy=form-ingredient-unit-0]").type("gb");
    cy.get("[data-cy=form-ingredient-name-0]").type("eggs");
    cy.get("[data-cy=form-ingredient-amount-1]").type(150);
    cy.get("[data-cy=form-ingredient-unit-1]").type("grams");
    cy.get("[data-cy=form-ingredient-name-1]").type("flour");
    cy.get("[data-cy=form-instructions]").type(
      "Mix ingredients together. Bake it."
    );
    cy.get("[data-cy=attach-image]").attachFile("./pancakes.jpeg");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=view-header]").should("contain", "Save your recipe here");
  });

  it("is expected to be able to enter new ingredient in an empty row", () => {
    cy.get("[data-cy=form-ingredient-input-line]").should("have.length", 3);
  });

  describe("by clicking a delete ingredient button", () => {
    before(() => {
      cy.get("[data-cy=ingredient-delete-1]").click();
    });

    it("is expected to delete an ingredient row", () => {
      cy.get("[data-cy=form-ingredient-name-1]").should("not.exist");
    });
  });

  describe("can press create button and see success message", () => {
    before(() => {
      cy.intercept("POST", "/api/recipes", {
        fixture: "create_response.json"
      });
      cy.get("[data-cy=save-btn]").click();
    });

    it("is expected to clear recipe title field", () => {
      cy.get("[data-cy=recipe-title]").should("not.contain", "Pancakes");
    });

    it("is expected to clear recipe ingredient field", () => {
      cy.get("[data-cy=form-ingredient-name-0]").should("not.contain", "eggs");
    });

    it("is expected to see aproval message after saving new recipe", () => {
      cy.get("[data-cy=flash-message]").should(
        "contain",
        "Recipe was created successfully"
      );
    });

    it("is expected not to see image filename anymore", () => {
      cy.get("[data-cy=filename]").should("be.empty");
    });
  });
});
