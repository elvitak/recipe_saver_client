/* eslint-disable no-undef */
describe("Visitingg the application, a user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#addNewRecipeTab").click();
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=addNewRecipe]").should("contain", "Save your recipe here");
  });

  it("is expected to enter data for a recipe", () => {
    cy.get("[data-cy=form-title]").type("Cielaviņa");
    cy.get("[data-cy=form-ingredient-amount]").type(2);
    cy.get("[data-cy=form-ingredient-unit]").type("g");
    cy.get("[data-cy=form-ingredient-name]").type("olas");
    cy.get("[data-cy=form-instructions]").type(
      "Vispirms sāk ar bezē kārtu gatavošanu - olu baltumus lej mikserbļodā, pievieno šķipsniņu sāls, tad sāk kulšanu, pēc kādas minūtes, kad olbaltumi kļuvuši gaisīgi, pa ēdamkarotei lēnām pievieno un iekuļ visu cukuru."
    );
    cy.get("[data-cy=form-add]").click();
  });

  it("is expected to add new ingredient input line after ingridient has been added", () => {
    cy.get("[data-cy=form-ingredient-amount]").type(10);
    cy.get("[data-cy=form-ingredient-unit]").type("ml");
    cy.get("[data-cy=form-ingredient-name]").type("piens");
    cy.get("[data-cy=form-ingredient-input-line]").should("have.length", 2);
  });
});
