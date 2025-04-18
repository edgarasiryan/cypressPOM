import { ProductPage } from "../pageObjects/product-page";
import { CartPage } from "../pageObjects/cart-page";
import { HomePage } from "../pageObjects/home-page";

describe('Test Add to Cart functionality', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  
  before(() => {
    productPage.openPage(productPage.constant_data.url + "index.html");
  });

  it('Test Add product to cart and verify alert', () => {
    homePage.clickRandomProduct();
    productPage.verifyProductAddedAlert('Product added');
    productPage.addToCart();
    cy.wait(1000)
    productPage.getCartPage();
    cartPage.verifyCartPageVisible();
    cartPage.verifyProductInCart();
})
});
