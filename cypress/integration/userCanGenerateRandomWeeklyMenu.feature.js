/* eslint-disable no-undef */
describe("User who wants to generate random weekly menu", () => {
  before(() => {
    cy.intercept("GET", "/api/recipes", {
      fixture: "index_response_with_random_recipes.json"
    });
    cy.visit("/");
    cy.get("[data-cy=generate-btn]").click();
  });

  it("is expected to see 7 recipes after generate button is clicked", () => {
    cy.get("data-cy=random-recipes").children().should("have.length", 7);
  });

  it("is expected to see recipes divided by weekdays", () => {
    cy.get("data-cy=random-recipes")
      .children()
      .first()
      .within()
      .should("contain", "Monday");
  });

  it("is expected to see right recipe titles", () => {
    cy.get("data-cy=random-recipes")
      .children()
      .first()
      .within()
      .should("contain", "Pancakes");
  });
});
