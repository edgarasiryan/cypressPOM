import { BaseClass } from "../pageObjects/base-class";
import { LoginPage } from "../pageObjects/login-page";

describe('Test Login functionality', () => {
  const loginPage = new LoginPage();
  let loginData

  before(() => {
    cy.fixture('login-data').then((data) => {
      loginData = data;
    });

    loginPage.openPage(loginPage.constant_data.url)

  });

  it('Test successful login', () => {
    loginPage.openLoginModal();
    loginPage.elVisibility(loginPage.logSelectors.modalTab);
    cy.wait(3000);
    loginPage.typeUsername(loginData.username);
    loginPage.typePassword(loginData.password);
    loginPage.clickLoginButton();
    loginPage.verifyLoginModalClosed();
    loginPage.verifyLogoutElementsVisible();
    loginPage.verifyWelcomeText(loginData.username);
    

  });
});
