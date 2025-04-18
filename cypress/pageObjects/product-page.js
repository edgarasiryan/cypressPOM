import { BaseClass } from "./base-class";

export class ProductPage extends BaseClass {
    
    productSelectors = {
        addToCartBtn: '.btn.btn-success',
    };

    addToCart() {
        this.safeClick(this.productSelectors.addToCartBtn);
    }

    verifyAddToCartButtonVisible() {
        this.elVisibility(this.productSelectors.addToCartBtn);
    }
}
