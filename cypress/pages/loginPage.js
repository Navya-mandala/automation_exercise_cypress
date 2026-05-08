class LoginPage {
    login(email, password) {
        cy.get('input[data-qa="login-email"]').type(email);
        cy.get('input[data-qa="login-password"]').type(password);
        cy.get('button[data-qa="login-button"]').click();
    }
     verifyLoginError() {
        cy.contains('Your email or password is incorrect!').should('be.visible');
     }

     verifyLoginSucessfull(username){
        cy.contains(`Logged in as ${username}`).should('be.visible')
     }

}
export default LoginPage;

