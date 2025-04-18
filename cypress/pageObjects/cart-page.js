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
        cy.get('@selectedProductName').then((name) => {
            this.verifyElementContainsText(this.cartSelectors.productList, name);
        });
    }
}
