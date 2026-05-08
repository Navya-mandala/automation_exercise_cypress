class SignupPage {


    fillSignupForm(name, email) {

        cy.get('input[data-qa="signup-name"]').type(name);

        cy.get('input[data-qa="signup-email"]').type(email);

        cy.get('button[data-qa="signup-button"]').click();

       
    }



    fillAccountDetails(password, firstName, lastName, address, state, city, zipcode, mobile) {
       cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type(password);
        cy.get('input[data-qa="first_name"]').type(firstName);
        cy.get('input[data-qa="last_name"]').type(lastName);
        cy.get('input[data-qa="address"]').type(address);
        cy.get('input[data-qa="state"]').type(state);
        cy.get('input[data-qa="city"]').type(city);
        cy.get('input[data-qa="zipcode"]').type(zipcode);
        cy.get('input[data-qa="mobile_number"]').type(mobile);
        cy.get('button[data-qa="create-account"]').click();
    }

   verifyAccountCreation() {
    cy.contains('Account Created!').should('be.visible');
   cy.get('a[data-qa="continue-button"]').click();
  }


  logout() {
    cy.contains('Logout').click();
  }
  verifyNewUserSignup(name) {
    cy.contains(`Logged in as ${name}`).should('be.visible');
  }



  accountDelete() {
    cy.contains('Delete Account').click();
  }

  verifyAccountDeleted() {
    cy.contains('Account Deleted!').should('be.visible');
  }

EmailAddressalreadyexist(){
   cy.contains('Email Address already exist!')
     .should('be.visible');

}


}
export default SignupPage;
