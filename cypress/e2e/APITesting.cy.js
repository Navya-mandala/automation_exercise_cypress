

describe("Api testing",()=>{

    it("get request using intercept",()=>{

        // Intercept API
        cy.intercept(
                'GET',
                '**/api/productsList').as('getproducts');

                 cy.visit('https://automationexercise.com');



                // Trigger API from browser
                 cy.window().then((win)=>{

                     win.fetch(
                'https://automationexercise.com/api/productsList'
                 );

         });

        // Wait for API
        cy.wait('@getproducts').then((interception)=>{

            // Status code validation
            expect(interception.response.statusCode)
            .to.eq(200);

            // Response validation
            expect(interception.response.body)
            .to.not.be.null;

          
            // Print response
            cy.log(JSON.stringify(interception.response.body));

        });

    });


    

    it("Validate unsupported POST method",()=>{

        // Intercept POST request
        cy.intercept(
            'POST',
            '**/api/productsList'
        ).as('postProducts');

        cy.visit('https://automationexercise.com')

         cy.window().then((win)=>{

            win.fetch(
                'https://automationexercise.com/api/productsList',
                {
                    method: 'POST'
                }
            );

        });

         cy.wait('@postProducts').then((interception)=>{

            // Validate status code
            expect(interception.response.statusCode)
            .to.eq(200);

            

            cy.log(JSON.stringify(interception.response.body));

        });







    })



    it("Search products using intercept",()=>{

        // Intercept POST API
        cy.intercept(
            'POST',
            '**/api/searchProduct'
        ).as('searchProduct');

        // Open website
        cy.visit('https://automationexercise.com');

        // Trigger request from browser
        cy.window().then((win)=>{

            win.fetch(
                'https://automationexercise.com/api/searchProduct',
                {
                    method: 'POST',

                    body: 'search_product=top'
                }
            );

        });

        // Wait for intercepted request
        cy.wait('@searchProduct').then((interception)=>{

            // Validate status code
            expect(interception.response.statusCode)
            .to.eq(415);

            // Validate response body exists
            expect(interception.response.body)
            .to.not.be.null;



            // Print response
            cy.log(JSON.stringify(interception.response.body));

        });

    });

});