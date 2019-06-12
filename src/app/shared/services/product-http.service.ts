import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductHttpService {

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${environment.apiUrl}/product`);
    }

    getProductById(productId: number): Observable<Product> {
        return this.http.get<Product>(`${environment.apiUrl}/product/${productId}`);
    }

    getCategories(): Observable<Array<string>> {
        return this.http.get<Array<string>>(`${environment.apiUrl}/product/category`);
    }

    getProductsByCategory(category: string): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${environment.apiUrl}/product/category/${category}`);
    }

    getProductsPromo(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${environment.apiUrl}/product/promo`);
    }

    getSearchText(searchText: string): Observable<Array<Product>> {
        return this.http.post<Array<Product>>(`${environment.apiUrl}/product/search/${searchText}`, null);
    }
}
