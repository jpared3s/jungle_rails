describe("Add to Cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adds a product to the cart and updates the cart count", () => {
    cy.get(".navbar .cart-count").should("contain", "0");
    cy.get(".products article").first().find("footer > button").click();
    cy.get(".navbar .cart-count").should("contain", "1");
  });
});