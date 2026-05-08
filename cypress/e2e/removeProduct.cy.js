import productPage from "../pages/productPage";
import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";

describe('Remove Product from Cart', () => {

    const product = new productPage();
    const homePage = new HomePage();
    const cart = new CartPage();

    beforeEach(function () {
        cy.fixture('userData').then((data) => {
            this.userData = data;
        });

        homePage.visit();
        homePage.clickProducts();
        product.verifyProductPage();
    });

    it('should remove product from cart successfully', function () {

        const productName = this.userData.product.removeItem;

        // Step 1: Add product
        product.addToCart();

        cy.contains('View Cart').click();

        cy.url().should('include', '/view_cart');

        // Step 2: Verify product exists
        cart.verifyProductInCart(productName);

        // Step 3: Remove product
        cart.removeProduct(productName);

        // Step 4: Verify cart is empty
        cart.verifyCartEmpty();
    });

});