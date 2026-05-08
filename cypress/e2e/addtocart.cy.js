import productPage from "../pages/productPage";
import HomePage from "../pages/homePage";


describe('Add to Cart Functionality', () => {

    const product = new productPage();
    const homePage = new HomePage();
   

    beforeEach(function () {
        cy.fixture('userData').then((data) => {
            this.userData = data;
        });

        homePage.visit();
        homePage.clickProducts();
        product.verifyProductPage();
    });

it.only('should add a product to the cart successfully', function () {

    const productName = this.userData.product.searchItem;

    product.addToCart();

    cy.contains('View Cart').click();

    cy.url().should('include', '/view_cart');

    
});





    it('should add a specific product to the cart successfully', function() {
        product.addToCartByName(this.userData.product.searchItem);
        cy.contains('View Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('contain', 'Rs.');
    });


    it('should add more than one product to the cart successfully', function () {

  const products = this.userData.products_morethan_one;

  product.addMoreThanOneProductToCart(products);

  product.clickViewCart();

  cy.url().should('include', '/view_cart');

  
  products.forEach((name) => {
    cy.contains('.cart_description', name).should('be.visible');
  });

});

});