import { BaseClass } from "./base-class";

export class CartPage extends BaseClass {
    cartSelectors = {
        cartPage: '#page-wrapper',
        productList: 'tr.success',
    }

    verifyCartPageVisible() {
        this.elVisibility(this.cartSelectors.productList);
    }

    verifyProductInCart() {
        cy.get(this.productList).should('exist');
    }

}
