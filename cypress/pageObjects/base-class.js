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
    
    selectRandomProduct(cardSelector, innerSelector) {
        cy.get(cardSelector).then(($cards) => {
            const randomIndex = Math.floor(Math.random() * $cards.length);
            cy.wrap($cards[randomIndex]).find(innerSelector).click();
        });
    }
}    