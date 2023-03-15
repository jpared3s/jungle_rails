describe("Product Details", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the home page and navigates to a product detail page", () => {
    cy.get(".products article").first().find("header > a").click();
    cy.url().should("include", "/products/");
  });

  it("Displays the product name on the product detail page", () => {
    cy.get(".products article").first().find("header > a").click();
    cy.get(".product-detail h1").should("be.visible");
  });
  
  it("Displays the product description on the product detail page", () => {
    cy.get(".products article").first().find("header > a").click();
    cy.get(".product-detail .description").should("be.visible");
  });
  
  it("Displays the product price on the product detail page", () => {
    cy.get(".products article").first().find("header > a").click();
    cy.get(".product-detail .price").should("be.visible");
  });
});