class CartPage {

  getProductRow(productName) {
    return cy.contains('.cart_description a', productName)
      .parents('tr');
  }

  verifyProductInCart(productName) {
    this.getProductRow(productName)
      .should('be.visible');
  }

  removeProduct(productName) {
    this.getProductRow(productName)
      .find('.cart_delete a')
      .click();
  }

  verifyCartEmpty() {
    cy.contains('Cart is empty!').should('be.visible');
  }

  viewCart(){
     cy.contains('View Cart').click();
  }
}

export default CartPage;