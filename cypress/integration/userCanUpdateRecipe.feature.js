/* eslint-disable no-undef */
describe("User, when clicking on recipe", () => {
  before(() => {
    cy.intercept("GET", "api/recipes", {
      fixture: "index_response.json"
    });
    cy.intercept("GET", "/api/recipes/*", {
      fixture: "show_response.json"
    });
    cy.visit("/");
    cy.get("[data-cy=recipe-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=view-btn]").click();
      });
  });

  it('is expected to display "Edit" button', () => {
    cy.get("[data-cy=edit-recipe-btn]").should("contain.text", "Edit");
  });

  describe('by clicking "Edit" button', () => {
    before(() => {
      cy.intercept("GET", "/api/recipes/*", {
        fixture: "show_response.json"
      });
      cy.get("[data-cy=edit-recipe-btn]").click();
    });

    it("is expected to navigate to edit recipe view", () => {
      cy.url().should("contain", "/recipes/1/edit");
    });

    it("is expected to display pre-filled recipe title in input field", () => {
      cy.get("[data-cy=recipe-title] input").should(
        "have.value",
        "Good Old Fashioned Pancakes"
      );
    });

    it("is expected to display pre-filled recipe ingredients amount in input field", () => {
      cy.get("[data-cy=form-ingredient-amount-0] input").should(
        "have.value",
        "100"
      );
    });

    it("is expected to display pre-filled recipe ingredients unit in input field", () => {
      cy.get("[data-cy=form-ingredient-unit-0] input").should(
        "have.value",
        "grams"
      );
    });

    it("is expected to display pre-filled recipe ingredients name in input field", () => {
      cy.get("[data-cy=form-ingredient-name-0] input").should(
        "have.value",
        "sugar"
      );
    });

    it("is expected to display pre-filled recipe instructions in input field", () => {
      cy.get("[data-cy=form-instructions] textarea").should(
        "contain",
        "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth."
      );
    });

    describe("can update the recipe and save", () => {
      before(() => {
        cy.intercept("PUT", "api/recipes/**", {
          fixture: "update_recipe_response.json"
        });
        cy.get("[data-cy=recipe-title]").type("{selectall}Modern pancakes");
        cy.get("[data-cy=save-btn]").click();
      });

      it("is expected to display successful message", () => {
        cy.get("[data-cy=flash-message]").should(
          "contain",
          "Your recipe was updated."
        );
      });

      it("is expected to be redirected to coresponding single recipe view", () => {
        cy.url().should("contain", "recipes/1");
      });
    });
  });
});
