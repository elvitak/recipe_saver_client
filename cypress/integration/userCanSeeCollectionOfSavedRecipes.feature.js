describe("User", () => {
  before(() => {
    cy.intercept("GET", "**/api/recipes", {
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
        cy.get("[data-cy=recipe-collection-title]").should(
          "contain",
          "nom nom"
        );
      });
  });

  it("is expected to see a button to view the recipe", () => {
    cy.get("[data-cy=recipe-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=view-btn]").click();
      });
  });
});
