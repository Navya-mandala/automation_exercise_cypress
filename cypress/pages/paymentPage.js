export default class PaymentPage {

clickProceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
}   

    verifyAddressDetails(expectedName, expectedAddress, expectedCity, expectedState, expectedZipcode, expectedCountry) {
        cy.get('.address_firstname').should('contain', expectedName);
        cy.get('.address_address1').should('contain', expectedAddress); 
        cy.get('.address_city').should('contain', expectedCity);
        cy.get('.address_state').should('contain', expectedState);
        cy.get('.address_zipcode').should('contain', expectedZipcode);
        cy.get('.address_country').should('contain', expectedCountry);
    }
    addPayementDetails(cardName, cardNumber, cvc,month, year ) {
        cy.get('[data-qa="name-on-card"]').clear().type(cardName);
        cy.get('[data-qa="card-number"]').clear().type(cardNumber);    

       cy.get('[data-qa="cvc"]').clear().type(cvc);
      cy.get('[data-qa="expiry-month"]').type(month);
      cy.get('[data-qa="expiry-year"]').type(year);
      cy.get('[data-qa="pay-button"]').click();
    }

    clickPayAndConfirmOrder() {

        cy.get(':nth-child(7) > .btn').click();
       
    }
    verifyOrderConfirmation() {
        
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }

    cancelOrder() {
        cy.contains('Cancel Order').click();
    }   
}