import { Component } from "@angular/core";

import { Product } from "./../../model/product.model";
import { Option } from "./../../model/option.model";
import { ProductRepository } from "./../../model/product.repository";

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})
export class ProductsComponent {

    public products: Product[];
    public colors: Option[];

    constructor(private repository: ProductRepository) {

        repository.getProducts().subscribe(response => this.products = response);
        repository.getColors().subscribe(response => this.colors = response);
    }

    changeFilter(option: Option) {

        var selectedColors = this.colors.filter(item => item.checked).map(item => item.value); 

        this.repository.getProductsByColors(selectedColors)
            .subscribe(response => this.products = response);
    }
}