/* eslint-disable no-undef */
describe("Visiting the application, user", () => {
  describe("who wants to see single recipe", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response.json",
      });
      cy.intercept("GET", "/api/recipes/*", {
        fixture: "show_response.json",
      }).as("getRecipe");
      cy.visit("/");
      cy.get("#recipeCollectionTab").click();
      cy.get("[data-cy=recipe-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=view-btn]").click();
        });
    });

    it("is expected to make a network call with status 200", () => {
      cy.wait("@getRecipe").its("response.statusCode").should("eq", 200);
    });

    it("is expected to see correct url", () => {
      cy.url().should("contain", "recipes/1");
    });

    it("is expected to see the right title", () => {
      cy.get("[data-cy=recipe-title]").should(
        "contain",
        "Good Old Fashioned Pancakes"
      );
    });
    it("is expected to see the right ingredients", () => {
      cy.get("[data-cy=ingredient-table]").contains("td", "sugar");
    });

    it("is expected to see the right instructions", () => {
      cy.get("[data-cy=recipe-instructions]").should(
        "contain",
        "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth."
      );
    });
  });

  describe("who wants to delete a recipe", () => {
    before(() => {
      cy.intercept("DELETE", "/api/recipes/*", {
        fixture: "delete_response.json",
      }).as("deleteRecipe");
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response.json",
      });
    });

    it("is expected to be able to click a delete button and make delete request", () => {
      cy.get("[data-cy=delete-btn]").click();
      cy.wait("@deleteRecipe").its("request.method").should("eq", "DELETE");
    });

    it("is expected to be redirected to collection of recipes", () => {
      cy.url().should("contain", "/recipes");
    });

    it("is expected to see a confirmation message", () => {
      cy.get("[data-cy=flash-message]").should(
        "contain",
        "You successfully deleted recipe"
      );
    });
  });
});
