import { BaseClass } from "./base-class";

export class HomePage extends BaseClass {
    productCard = '.card.h-100';
    productTitleLink = '.hrefch';

    clickRandomProduct() {
        this.selectRandomProduct(this.productCard, this.productTitleLink);
    }
}