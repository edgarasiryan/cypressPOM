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
    productPage.addToCart();
    productPage.verifyProductAddedAlert('Product added');
    productPage.getCartPage();
    cartPage.verifyCartPageVisible();
    cartPage.verifyProductInCart(homePage.selectedProductTitle);
  })
});
