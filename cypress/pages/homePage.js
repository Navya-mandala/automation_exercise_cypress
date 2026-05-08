import userData from "../fixtures/userData.json"
class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/');
    }
    clickSignupLogin(){
        cy.contains('Signup / Login').click();
     }

     verifyHomePage() {
        cy.url().should('eq', 'https://automationexercise.com/');
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
//navigate to products page
clickProducts() {
    cy.contains('Products').click();
}

//search for a product
  searchProduct(productName) {
    cy.get('#search_product').clear().type(productName);
    cy.get('button[id="submit_search"]').click();
  }


  //category selection
   clickWomenDress() {
    cy.contains('Women').click();
    cy.contains('Dress').click();
  }

  clickMenTshirts() {
    cy.contains('Men').click();
    cy.contains('Tshirts').click();
  }

   verifyCategoryPage(categoryText) {
    cy.contains(categoryText).should('be.visible');
    cy.get('.productinfo').should('have.length.greaterThan', 0);
  }

  contactUs(){
    cy.contains('Contact us').click()
    cy.get('[data-qa="name"]').type(userData.loginUser.username)
    cy.get('[data-qa="email"]').type(userData.loginUser.email)
    cy.get('[data-qa="message"]').type("Hii")
    cy.get('[data-qa="submit-button"]').click()
  }



  verifySubscription(){

     cy.contains('Subscription').should('be.visible');
       // Enter email and click arrow button
        const email = `navya${Date.now()}@test.com`;

        cy.get('#susbscribe_email').type(email);

        cy.get('#subscribe').click();

        // Verify success message
        cy.contains('You have been successfully subscribed!')
          .should('be.visible');

  }


  clickCart(){


    cy.contains('Cart').click();
  }
  
}



export default HomePage;
