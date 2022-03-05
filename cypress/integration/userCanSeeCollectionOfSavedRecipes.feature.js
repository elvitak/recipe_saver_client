/* eslint-disable no-undef */
describe("Visiting the application, user", () => {
  describe("who has created recipes", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response.json",
      }).as("getRecipes");
      cy.visit("/");
      cy.get("#recipeCollectionTab").click();
    });
    it("is expected to make a network call with status 200", () => {
      cy.wait("@getRecipes").its("response.statusCode").should("eq", 200);
    });

    it("is expected to see 3 saved recipes", () => {
      cy.get("[data-cy=recipe-collection]").children().should("have.length", 3);
    });

    it("is expected to see the right title", () => {
      cy.get("[data-cy=recipe-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=recipe-title]").should("contain", "nom nom");
        });
    });

    it("is expected to see a button to view the recipe", () => {
      cy.get("[data-cy=recipe-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=view-btn]").should("be.visible");
        });
    });

    it("is expected to have access to the right url", () => {
      cy.get("[data-cy=recipe-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=view-btn][href=\\/recipes\\/1]").should(
            "be.visible"
          );
        });
    });
  });

  describe("who hasn't created recipes", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_with_norecipes.json",
        statusCode: 404,
      });
      cy.visit("/");
      cy.get("#recipeCollectionTab").click();
    });

    it("is expected to see a message that says that you haven't  created ant recipe yet", () => {
      cy.get("[data-cy=informational-message]").should(
        "contain",
        "You haven't saved any recipe yet"
      );
    });
  });
});
