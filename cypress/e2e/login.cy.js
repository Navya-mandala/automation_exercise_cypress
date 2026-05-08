import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
describe('User Login', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();  
    beforeEach(function() {
        cy.fixture('userData').then((data) => {
            this.userData = data;
        });
        homePage.visit();
        homePage.clickSignupLogin();
    });

    it('should login successfully with valid credentials', function() {
        const userDataL = this.userData.loginUser;
        //login
        loginPage.login(userDataL.email, userDataL.password);
        //login verification
        homePage.verifyLoggedIn(userDataL.username);
        //logout
        homePage.logout();
        //verifying redirection to login page after logout
        homePage.verifyRedirectToLogin();
    });


    it('should display error message with invalid credentials', function() {
        const userDataL = this.userData.invalidUser;  
        //login with invalid credentials
        loginPage.login(userDataL.email, userDataL.password);  
        //verify error message
        loginPage.verifyLoginError();

    });


});










    
   