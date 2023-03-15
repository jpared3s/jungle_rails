describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the home page", () => {
    cy.url().should("include", "/");
  });

  it("There are products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

});