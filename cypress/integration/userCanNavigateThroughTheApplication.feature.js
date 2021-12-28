/* eslint-disable no-undef */
describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("to My Recipes tab and it", () => {
    before(() => {
      cy.get("#addNewRecipeTab").click();
      cy.get("#recipeCollectionTab").click();
    });

    it("is expected to display My recipes header", () => {
      cy.get("#collectionOfRecipes").should("contain", "My saved recipes");
    });

    it("is expected to display correct url", () => {
      cy.url().should("not.contain", "add_recipe");
    });

    it("is expected to not display Add Recipe header", () => {
      cy.get("#addRecipeHeader").should("not.exist");
    });
  });

  describe("to Add Recipe tab and it", () => {
    before(() => {
      cy.get("#recipeCollectionTab").click();
      cy.get("#addNewRecipeTab").click();
    });

    it("is expected to display My recipes header", () => {
      cy.get("#collectionOfRecipes").should("contain", "My saved recipes");
    });

    it("is expected to display correct url", () => {
      cy.url().should("not.contain", "recipe_collection");
    });

    it("is expected to not display Add Recipe header", () => {
      cy.get("#savedRecipesHeader").should("not.exist");
    });
  });
});
