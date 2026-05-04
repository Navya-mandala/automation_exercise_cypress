class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/');
    }
     clickSignupLogin(){
        cy.contains('Signup / Login').click();
     }

  verifyLoggedIn(username) {
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }
  logout() {
    cy.contains('Logout').click();
  }

  verifyRedirectToLogin() {
    cy.url().should('include', '/login');
  }



}
export default HomePage;
