class productPage {
    //verify that the user is navigated to the product page
    verifyProductPage() {
        cy.url().should('include', '/products');
        cy.contains('Rs.').should('be.visible');
    }

    //click on the first product
    clickFirstProduct() {
        cy.get('.product-image-wrapper').first().click();
    }






    //add cart functionality
    addToCart() {
        cy.get('.product-image-wrapper').first().trigger('mouseover');
        cy.contains('Add to cart').click();
    }


    addToCartByName(productName) {
        cy.contains('.productinfo', productName).parent().trigger('mouseover');
        cy.contains('.productinfo', productName).parent().contains('Add to cart').click();
    }


  addMoreThanOneProductToCart(productNames) {

  cy.wrap(productNames).each((name) => {

    cy.contains('.productinfo p', name)
      .parents('.product-image-wrapper')
      .first()
      .as('product');

    cy.get('@product').trigger('mouseover');

    cy.get('@product')
      .contains('Add to cart')
      .click({ force: true });

    cy.contains('Continue Shopping', { timeout: 10000 })
      .should('be.visible')
      .click();
  });

}


clickViewCart() {
  cy.visit('https://automationexercise.com/view_cart');
}
 


clickviewProduct(){
  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
}

verifyProductDetails(){
  cy.get(".product-information").should('be.visible')
  
}
/*
hoverAndAddToCart(){

   cy.get('.product-image-wrapper')
          .eq(0)
          .trigger('mouseover');

  cy.get('.overlay-content .add-to-cart')
  .eq(1)
  .click({ force: true });

        // cy.contains('Add to cart')
        //   .first()
        //   .click({ force: true });


}

*/
hoverAndAddToCart() {

    cy.get('.product-image-wrapper')
      .eq(0)
      .trigger('mouseover')
      .within(() => {

          cy.contains('Add to cart')
            .click({ force: true });

      });
}
continueshopping(){
    cy.contains('Continue Shopping').click();

}


hoverSecondProductAndAddToCart(){
   cy.get('.product-image-wrapper')
          .eq(3)
          .trigger('mouseover');
     cy.get('.overlay-content .add-to-cart')
  .eq(1)
  .click({ force: true });


        // cy.contains('Add to cart')
        //   .eq(1)
        //   .click({ force: true });
}


}
export default productPage;
