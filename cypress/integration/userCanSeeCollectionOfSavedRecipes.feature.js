/* eslint-disable no-undef */
describe("Visiting the application, user", () => {
  describe("while recipes are loading", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", async (req) => {
        req.reply({
          fixture: "index_response.json",
          delay: 500
        });
      }).as("getRecipes");
      cy.visit("/");
    });

    it("is expected to see loading image", () => {
      cy.get("[data-cy=loading-circle]").should("exist");
      cy.wait("@getRecipes");
    });

    it("is expected to not see loading image once there is recipes to display", () => {
      cy.get("[data-cy=loading-circle]").should("not.exist");
    });
  });

  describe("who has created recipes", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_response.json"
      }).as("getRecipes");
      cy.visit("/");
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

    it("is expected to see an image", () => {
      cy.get("[data-cy=recipe-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=recipe-image]").should("exist");
        });
    });
  });

  describe("who hasn't created recipes", () => {
    before(() => {
      cy.intercept("GET", "/api/recipes", {
        fixture: "index_with_norecipes.json"
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
