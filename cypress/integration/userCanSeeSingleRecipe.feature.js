/* eslint-disable no-undef */
describe("User", () => {
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

  it("is expected to display correct url", () => {
    cy.url().should("contain", "1");
  });

  it("is expected to see the right title", () => {
    cy.get("[data-cy=recipe-title]").should(
      "contain",
      "Good Old Fashioned Pancakes"
    );
  });

  it("is expected to see the right ingredients", () => {
    cy.get("[data-cy=recipe-ingredients]").should("contain", "100 grams sugar");
  });

  it("is expected to see the right ingredients", () => {
    cy.get("[data-cy=recipe-instructions]").should(
      "contain",
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth."
    );
  });
});
