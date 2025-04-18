import { BaseClass } from "./base-class";

export class LoginPage extends BaseClass {
    logSelectors = {
        loginbtn: '#login2',
        modalTab: '.modal-content',
        loginField: "#loginusername",
        passwordField: "#loginpassword",
        userinfo: "#nameofuser",
        logoutbtn: '#logout2',
        
    };

    openLoginModal() {
        this.safeClick(this.logSelectors.loginbtn)
        }

    typeUsername(username) {
        this.safeType(this.logSelectors.loginField, username)
    }

    typePassword(password) {
        this.safeType(this.logSelectors.passwordField, password)
    }

    clickLoginButton() {
        cy.contains('button', 'Log in').click();
    }

    verifyLoginModalClosed() {
        cy.get(this.modalTab).should('not.exist');
    }

    verifyLogoutElementsVisible() {
        cy.get(this.logSelectors.logoutbtn).should('be.visible');
    }
      
    verifyWelcomeText(username) {
        cy.get(this.logSelectors.userinfo)
        .should('exist')
        .and('contain', `Welcome ${username}`);
    }
    
}
