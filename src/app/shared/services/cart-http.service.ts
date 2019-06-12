import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartResponse, QuantityInCart} from '../interfaces/cart';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class CartHttpService {

    constructor(private http: HttpClient) {
    }

    getCart(): Observable<CartResponse> {
        return this.http.get<CartResponse>(`${environment.apiUrl}/cart`);
    }

    getQuantity(): Observable<QuantityInCart> {
        return this.http.get<QuantityInCart>(`${environment.apiUrl}/cart/quantity`);
    }

    postCart(): Observable<CartResponse> {
        return this.http.post<CartResponse>(`${environment.apiUrl}/cart`, null);
    }

    putCart(productId: string, quantity: number) {
        return this.http.put<CartResponse>(`${environment.apiUrl}/cart/${productId}/${quantity}`, null);
    }

    deleteProductFromCart(productId: string) {
        return this.http.delete<CartResponse>(`${environment.apiUrl}/cart/${productId}`);
    }

    deleteCart() {
        return this.http.delete<CartResponse>(`${environment.apiUrl}/cart`);
    }
}
