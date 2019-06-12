import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductHttpService} from '../../shared/services/product-http.service';
import {Product} from '../../shared/interfaces/product';
import {Location} from '@angular/common';
import {CartHttpService} from '../../shared/services/cart-http.service';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
import {CounterItemService} from '../../shared/services/counter-item.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: Product;
    showSpinner = true;
    counter = 1;
    badge = false;
    counterItemInCart = 0;

    constructor(private route: ActivatedRoute, private productHttpServiece: ProductHttpService,
                private location: Location, private cartHttpService: CartHttpService, private errorHandler: ErrorHandlerService,
                private counterItemService: CounterItemService) {
    }

    getProductById(productId: number) {
        this.productHttpServiece.getProductById(productId).subscribe(p => {
                this.product = p;
            },
            (error) => {
                this.errorHandler.handleError(error);
            });
    }

    goBack() {
        this.location.back();
    }

    addProductToCart(productId: string) {
        this.cartHttpService.postCart().subscribe();
        this.cartHttpService.putCart(productId, this.counter).subscribe(c => {
            this.cartHttpService.getQuantity().subscribe(o => {
                    this.counterItemInCart = o.quantity;
                    this.counterItemService.updateQuantity(this.counterItemInCart);
                    this.counter = 1;
                },
                (error) => {
                    this.errorHandler.handleError(error);
                });


        });
        this.badge = true;
        this.counter = 1;

    }

    getCounterProductEmit(counter: number) {
        this.counter = counter;
    }

    ngOnInit() {
        this.route.paramMap.subscribe((param: Params) => {
            this.getProductById(param.get('id'));
        });
        this.showSpinner = false;
    }

}
