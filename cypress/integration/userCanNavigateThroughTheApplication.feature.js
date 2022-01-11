/* eslint-disable no-undef */
describe("User can navigate the app", () => {
  before(() => {
    cy.intercept("GET", "**/api/recipes", {
      fixture: "index_response.json",
    });
    cy.visit("/");
  });

  describe("to My Recipes tab and it", () => {
    before(() => {
      cy.get("#addNewRecipeTab").click();
      cy.get("#recipeCollectionTab").click();
    });

    it("is expected to display My recipes header", () => {
      cy.get("[data-cy=collectionOfRecipes]").should(
        "contain",
        "Saved recipes"
      );
    });

    it("is expected to display correct url", () => {
      cy.url().should("not.contain", "add_recipe");
    });

    it("is expected to not display Add Recipe header", () => {
      cy.get("[data-cy=addNewRecipe]").should("not.exist");
    });
  });

  describe("to Add Recipe tab and it", () => {
    before(() => {
      cy.get("#addNewRecipeTab").click();
    });

    it("is expected to display My recipes header", () => {
      cy.get("[data-cy=addNewRecipe]").should(
        "contain",
        "Save your recipe here"
      );
    });

    it("is expected to display correct url", () => {
      cy.url().should("contain", "add_recipe");
    });

    it("is expected to not display Add Recipe header", () => {
      cy.get("[data-cy=collectionOfRecipes]").should("not.exist");
    });
  });
});
