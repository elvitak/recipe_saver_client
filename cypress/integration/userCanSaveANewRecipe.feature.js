describe("Visitingg the application, a user", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("is expected to see a header", () => {
    cy.get("h1").should("contain", "Save your recipe here");
  });
});
