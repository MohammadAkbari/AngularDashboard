import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Option } from "./option.model";
import "rxjs/add/operator/map";

@Injectable()
export class ProductRepository {

    constructor(private http: Http, @Inject("BASE_URL") private baseUrl: string) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.baseUrl + "api/product/list")
            .map(response => response.json() as Product[]);
    }

    getProductsByColors(colors: string[]): Observable<Product[]> {

        let params: URLSearchParams = new URLSearchParams();

        params.set("colors", colors.join(","));

        let requestOptions = new RequestOptions();
        requestOptions.params = params;

        return this.http.get(this.baseUrl + "api/product/list", requestOptions)
            .map(response => response.json() as Product[]);
    }

    getColors(): Observable<Option[]> {
        return this.http.get(this.baseUrl + "api/product/colors")
            .map(response => {
                var list = response.json() as string[];
                return list.map(item => new Option(item));
            });
    }
}