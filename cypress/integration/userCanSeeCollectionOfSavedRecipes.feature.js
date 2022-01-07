describe("User", () => {
  before(() => {
    cy.intercept("GET", "**/api/recipes", { fixture: "index_response.json" });
    cy.visit("/");
    cy.get("#recipeCollectionTab").click();
    cy.get("[data-cy=recipe-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("button").click();
      });
  });

  it("is expected to see 3 saved recipes", () => {
    cy.get("[data-cy=recipe-collection]").should("have.length", 3);
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
        cy.get("button").click();
      });
  });
});
