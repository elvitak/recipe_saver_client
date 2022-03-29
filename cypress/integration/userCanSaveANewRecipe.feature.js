/* eslint-disable no-undef */
describe("Visiting the application, a user", () => {
  before(() => {
    cy.intercept("GET", "/api/recipes", {
      fixture: "index_response.json"
    });
    cy.visit("/");
    cy.get("#addNewRecipeTab").click();
    cy.get("[data-cy=recipe-title]").type("Cielaviņa");
    cy.get("[data-cy=form-ingredient-amount-0]").type(2);
    cy.get("[data-cy=form-ingredient-unit-0]").type("g");
    cy.get("[data-cy=form-ingredient-name-0]").type("olas");
    cy.get("[data-cy=form-ingredient-amount-1]").type(150);
    cy.get("[data-cy=form-ingredient-unit-1]").type("grami");
    cy.get("[data-cy=form-ingredient-name-1]").type("miltu");
    cy.get("[data-cy=form-instructions]").type(
      "Vispirms sāk ar bezē kārtu gatavošanu - olu baltumus lej mikserbļodā, pievieno šķipsniņu sāls, tad sāk kulšanu."
    );
    cy.get("[data-cy=attach-image]").attachFile("./pancakes.jpeg");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=add-new-recipe]").should(
      "contain",
      "Save your recipe here"
    );
  });

  it("is expected to be able to enter new ingredient in an empty row", () => {
    cy.get("[data-cy=form-ingredient-input-line]").should("have.length", 3);
  });

  describe("can press create button and see success message", () => {
    before(() => {
      cy.intercept("POST", "/api/recipes", {
        fixture: "create_response.json"
      });
    });

    it("is expected to be able to press create", () => {
      cy.get("[data-cy=save-btn]").click();
    });

    it("is expected to see aproval message after saving new recipe", () => {
      cy.get("[data-cy=flash-message]").should(
        "contain",
        "Recipe was created successfully"
      );
    });
  });
});
