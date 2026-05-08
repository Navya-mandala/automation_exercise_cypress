import quantitySet from "../pages/update_cart_quantity";
import HomePage from "../pages/homePage";

describe('Update Product Quantity in Cart', () => {

    const quantity = new quantitySet();
    const homePage = new HomePage();
    it('should update product quantity in cart successfully', function () {

        homePage.visit();
        homePage.clickProducts();
        quantity.openSecondProduct();
        quantity.setQuantity(4);
        quantity.addToCartSecondProduct();
        quantity.clickViewCart();
        quantity.verifyQuantityInCart(4);
        quantity.verifyTotalPrice('Rs. 1600'); // Assuming each product costs $50.00, total should be $200.00 for 4 items
    });

});

