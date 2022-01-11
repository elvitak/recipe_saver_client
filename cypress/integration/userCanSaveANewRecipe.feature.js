/* eslint-disable no-undef */
describe("Visiting the application, a user", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/api/recipes", {
      fixture: "create_response.json",
    });
    cy.visit("/");
    cy.get("#addNewRecipeTab").click();
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=addNewRecipe]").should("contain", "Save your recipe here");
  });

  it("is expected to enter data for a recipe", () => {
    cy.get("[data-cy=form-title]").type("Cielaviņa");
    cy.get("[data-cy=form-ingredient-amount-0]").type(2);
    cy.get("[data-cy=form-ingredient-unit-0]").type("g");
    cy.get("[data-cy=form-ingredient-name-0]").type("olas");
    cy.get("[data-cy=form-instructions]").type(
      "Vispirms sāk ar bezē kārtu gatavošanu - olu baltumus lej mikserbļodā, pievieno šķipsniņu sāls, tad sāk kulšanu, pēc kādas minūtes, kad olbaltumi kļuvuši gaisīgi, pa ēdamkarotei lēnām pievieno un iekuļ visu cukuru."
    );
    cy.get("[data-cy=form-create-btn]").click();
  });

  it("is expected to add new ingredient input line after ingridient has been added", () => {
    cy.get("[data-cy=form-ingredient-amount-0]").type(10);
    cy.get("[data-cy=form-ingredient-unit-0]").type("ml");
    cy.get("[data-cy=form-ingredient-name-0]").type("piens");
    cy.get("[data-cy=form-ingredient-input-line]").should("have.length", 2);
  });

  it("is expected to be able to add 3 ingredients", () => {
    cy.get("[data-cy=form-ingredient-amount-0]").type(10);
    cy.get("[data-cy=form-ingredient-unit-0]").type("ml");
    cy.get("[data-cy=form-ingredient-name-0]").type("piens");
    cy.get("[data-cy=form-ingredient-amount-1]").type(1);
    cy.get("[data-cy=form-ingredient-unit-1]").type("gb");
    cy.get("[data-cy=form-ingredient-name-1]").type("ola");
    cy.get("[data-cy=form-ingredient-amount-2]").type(500);
    cy.get("[data-cy=form-ingredient-unit-2]").type("gr");
    cy.get("[data-cy=form-ingredient-name-2]").type("miltu");
    cy.get("[data-cy=form-ingredient-input-line]").should("have.length", 4);
  });
});
