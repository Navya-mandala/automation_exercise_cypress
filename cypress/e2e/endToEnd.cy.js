import SignupPage from '../pages/signupPage';
import userData from '../fixtures/userData.json';
import HomePage from '../pages/homePage';
import LoginPage from "../pages/loginPage";
import productPage from '../pages/productPage';

import PaymentPage from '../pages/paymentPage';

import CartPage  from "../pages/CartPage";
describe('End-to-End Test', () => {
    const signupPage = new SignupPage();
    const homePage = new HomePage();
    const loginPage=new LoginPage();
    const productP=new productPage();
    const cart=new CartPage();
    const pay=new PaymentPage();

    it.skip('Registers a new user and verifies account creation', () => {
         const uniqueEmail = `navya${Date.now()}@test.com`;
         homePage.visit();
        homePage.verifyHomePage();
        homePage.clickSignupLogin();

        signupPage.fillSignupForm(userData.registerUser.name, uniqueEmail);


        signupPage.fillAccountDetails(userData.registerUser.password, userData.registerUser.firstName, userData.registerUser.lastName, userData.registerUser.address, userData.registerUser.state, userData.registerUser.city, userData.registerUser.zipcode, userData.registerUser.mobile);
        signupPage.verifyAccountCreation();
       
        signupPage.accountDelete();
        signupPage.verifyAccountDeleted();


    });


    it.skip('login user -valid credentilas ',()=>{

        homePage.visit();
        homePage.clickSignupLogin();
        loginPage.login(userData.loginUser.email,userData.loginUser.password)
        loginPage.verifyLoginSucessfull(userData.loginUser.username)
    
    })

    it.skip("invalid login",()=>{

        homePage.visit();
        homePage.clickSignupLogin();
        loginPage.login(userData.invalidUser.email,userData.invalidUser.password);
        loginPage.verifyLoginError()

    })

    it.skip("logout",()=>{

        homePage.visit();
        homePage.clickSignupLogin();
        loginPage.login(userData.loginUser.email,userData.loginUser.password)
        loginPage.verifyLoginSucessfull(userData.loginUser.username)
        homePage.logout()


    })

    it.skip("Register user with existing mail",()=>{


         homePage.visit();
        homePage.verifyHomePage();
        homePage.clickSignupLogin();
        signupPage.fillSignupForm(userData.registerUser.name,'navya11@gmail.com');
      signupPage.EmailAddressalreadyexist()

    })


    it.skip('contact us',()=>{

        
        homePage.visit();
        homePage.verifyHomePage();
        homePage.contactUs();

    })

    it.skip("verify all product details",()=>{

         homePage.visit();
        homePage.verifyHomePage();
        homePage.clickProducts();
        productP.verifyProductPage();
        productP.clickviewProduct();
        productP.verifyProductDetails();

        

    })

    it.skip("search product",()=>{

         homePage.visit();
        homePage.verifyHomePage();
        homePage.clickProducts();
        productP.verifyProductPage();
        homePage.searchProduct("dress");
    


    })


    it.skip("subscription page",()=>{
        
         homePage.visit();
        homePage.verifyHomePage();
         // Scroll down to footer
        cy.scrollTo('bottom');
        homePage.verifySubscription();
    })

    it.skip("add products to cart",()=>{
        homePage.visit();
        homePage.verifyHomePage();
        homePage.clickProducts();
        productP.verifyProductPage();
        productP.hoverAndAddToCart();
        productP.continueshopping();
        productP.hoverSecondProductAndAddToCart();
        cart.viewCart();

    })

    it.skip("place order",()=>{

        homePage.visit();
        homePage.verifyHomePage();
        homePage.clickProducts();
        productP.verifyProductPage();
        productP.hoverAndAddToCart();
        productP.continueshopping();
        productP.hoverSecondProductAndAddToCart();
        cart.viewCart();
        pay.clickProceedToCheckout();
        cy.get('.modal-body > :nth-child(2) > a > u').click();
        
        loginPage.login(userData.loginUser.email,userData.loginUser.password)
       
        homePage.clickCart();
         pay.clickProceedToCheckout();
        pay.clickPayAndConfirmOrder();
        pay.addPayementDetails('Navya', '1234567890123456', '123', '12', '25' );
        pay.verifyOrderConfirmation();



    })


    it("end to end",()=>{
         const uniqueEmail = `navya${Date.now()}@test.com`;
         homePage.visit();
        homePage.verifyHomePage();
        homePage.clickSignupLogin();

        signupPage.fillSignupForm(userData.registerUser.name, uniqueEmail);


        signupPage.fillAccountDetails(userData.registerUser.password, userData.registerUser.firstName, userData.registerUser.lastName, userData.registerUser.address, userData.registerUser.state, userData.registerUser.city, userData.registerUser.zipcode, userData.registerUser.mobile);
        signupPage.verifyAccountCreation();


         homePage.clickProducts();
        productP.verifyProductPage();
        productP.hoverAndAddToCart();
        productP.continueshopping();
        productP.hoverSecondProductAndAddToCart();
        cart.viewCart();
        homePage.clickCart();
        pay.clickProceedToCheckout();
        pay.clickPayAndConfirmOrder();
        pay.addPayementDetails('Navya', '1234567890123456', '123', '12', '25' );
        pay.verifyOrderConfirmation();
        homePage.logout();


    })


});