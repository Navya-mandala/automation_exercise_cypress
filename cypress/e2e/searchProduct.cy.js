import productPage from "../pages/productPage";
import HomePage from "../pages/homePage";



describe('Search Product', () => {
    const homePage = new HomePage();
    const productP = new productPage();
    beforeEach(function () {
        cy.fixture('userData').then((data) => {
        this.userData = data;
     });
        homePage.visit();
        homePage.clickProducts();
    
    
    });
  it('should search for a product successfully', function () {
    homePage.searchProduct(this.userData.product.searchItem);
    productP.verifyProductPage();
    productP.clickFirstProduct();
});


it('should search for a product with category selection', function () {
   homePage.clickWomenDress();
   homePage.verifyCategoryPage(this.userData.product.womenCategory);
   productP.clickFirstProduct();
   homePage.clickMenTshirts();
   homePage.verifyCategoryPage(this.userData.product.menCategory);

productP.clickFirstProduct();
    
});
});


