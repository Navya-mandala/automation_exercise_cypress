import HomePage from "../pages/homePage";
import SignupPage from "../pages/signupPage";
import userData from "../fixtures/userData.json";

describe('User Registration', () => {
    const homePage = new HomePage();
    const signupPage = new SignupPage();


    it('should register a new user successfully', () => {
        homePage.visit();
        homePage.clickSignupLogin();
        const userDataR = userData.registerUser;
        signupPage.fillSignupForm(userDataR.name, userDataR.email);
        signupPage.fillAccountDetails(userDataR.password, userDataR.firstName, userDataR.lastName, userDataR.address, userDataR.state, userDataR.city, userDataR.zipcode, userDataR.mobile);
        signupPage.verifyAccountCreation();
        signupPage.logout();

      
    });

});
