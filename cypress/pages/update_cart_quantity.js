class quantitySet{

    openSecondProduct(){
       cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();

    }
    setQuantity(quantity){
        cy.get('#quantity').clear().type(quantity);
    }
    addToCartSecondProduct(){
        cy.get(':nth-child(5) > .btn').click();
    }
    clickViewCart(){
        cy.contains('View Cart').click();
    }

    verifyQuantityInCart(expectedQuantity) {
        cy.get('.cart_quantity').should('contain', expectedQuantity);
    }   
    verifyTotalPrice(expectedTotal) {
        cy.get('.cart_total_price').should('contain', expectedTotal);
    }

}

export default quantitySet;