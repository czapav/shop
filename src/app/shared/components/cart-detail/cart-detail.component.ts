import {Component, OnInit} from '@angular/core';
import {CartHttpService} from '../../services/cart-http.service';
import {ErrorHandlerService} from '../../services/error-handler.service';
import {CounterItemService} from '../../services/counter-item.service';
import {CartResponse} from '../../interfaces/cart';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

    public productsCart: CartResponse;
    private priceTotal: number;
    private quantityTotal = 0;


    constructor(private cartHttpService: CartHttpService, private errorHandler: ErrorHandlerService,
                private counterItemService: CounterItemService) {
    }

    getCart() {
        this.cartHttpService.getCart().subscribe(c => {
                this.productsCart = c;
                this.cartHttpService.getQuantity().subscribe(o => {
                    this.priceTotal = o.priceTotal;
                    this.quantityTotal = o.quantity;
                });
            },
            (error: HttpErrorResponse) => {
                if (error.status === 404) {
                    this.cartHttpService.postCart().subscribe(() => {
                    });
                }
            });
    }

    deleteProductFromCart(productId: string) {
        this.cartHttpService.deleteProductFromCart(productId).subscribe(c => {
            this.productsCart = c;

            this.cartHttpService.getQuantity().subscribe(o => {
                    this.counterItemService.updateQuantity(o.quantity);
                    this.priceTotal = o.priceTotal;
                    this.quantityTotal = o.quantity;
                },
                (error) => {
                    this.errorHandler.handleError(error);
                });
        });
    }

    getCounterProductEmit(counter: number, productId?: string) {

        this.cartHttpService.putCart(productId, counter).subscribe(c => {
            this.productsCart = c;
            this.cartHttpService.getQuantity().subscribe(o => {
                    this.counterItemService.updateQuantity(o.quantity);
                    this.priceTotal = o.priceTotal;
                    this.quantityTotal = o.quantity;
                },
                (error) => {
                    this.errorHandler.handleError(error);
                });
        });
    }

    ngOnInit() {
        this.getCart();
    }
}
