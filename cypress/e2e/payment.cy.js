import PaymentPage from "../pages/paymentPage";
import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";
import loginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import productPage from "../pages/productPage";
import quantitySet from "../pages/update_cart_quantity";

describe('Payment Process', () => {
    const paymentPage = new PaymentPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const login = new loginPage();
    const product = new productPage();
    const quantity = new quantitySet();
    it('should complete the payment process successfully', function () {
      const email = userData.loginUser.email;
      const password = userData.loginUser.password;


       homePage.visit();
       homePage.clickSignupLogin();
       login.login(email, password);
       homePage.clickProducts();
       quantity.openSecondProduct();
       quantity.setQuantity(2);
       quantity.addToCartSecondProduct();
        quantity.clickViewCart();
        paymentPage.clickProceedToCheckout();
        paymentPage.clickPayAndConfirmOrder();
        paymentPage.addPayementDetails('Navya', '1234567890123456', '123', '12', '25' );
    
        paymentPage.verifyOrderConfirmation();


       
    });

});