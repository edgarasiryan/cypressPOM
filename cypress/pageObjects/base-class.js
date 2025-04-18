export class BaseClass {
    
    constant_selectors = {
        cart: '#cartur'
    }

    constant_data = {
        url: "https://demoblaze.com/",
    }
 
    safeType(selector, text) {
        cy.get(selector)
          .should('be.visible')
          .should('be.enabled')
          .focus()
          .clear()
          .type(text, { delay: 100 })
    }

    safeClick(selector) {
        cy.get(selector)
          .should('be.visible')
          .click()
    }
 
    openPage(url) {
        cy.visit(url)
    }

    elVisibility(selector) {
        cy.get(selector).should('be.visible')
    }

    verifyProductAddedAlert(text) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(text);
        });
    }

    getCartPage() {
        cy.get(this.constant_selectors.cart).click()
    }
    
    verifyElementContainsText(selector, expectedText) {
        cy.get(selector).should('contain.text', expectedText);
    }

    selectRandomProduct(cardSelector, innerSelector) {
        cy.get(cardSelector).then(($cards) => {
            const randomIndex = Math.floor(Math.random() * $cards.length);
            const $card = $cards[randomIndex];
            const productName = $card.querySelector(innerSelector).innerText;
    
            cy.wrap(productName).as('selectedProductName');
            cy.wrap($card).find(innerSelector).click();
        });
    }
}    