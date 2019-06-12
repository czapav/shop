import {Component, OnInit} from '@angular/core';
import {CartHttpService} from '../../shared/services/cart-http.service';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
import {CounterItemService} from '../../shared/services/counter-item.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-order-done',
    templateUrl: './order-done.component.html',
    styleUrls: ['./order-done.component.scss']
})
export class OrderDoneComponent implements OnInit {

    private alertSuccess = false;
    private alertError = false;

    constructor(private cartHttpService: CartHttpService, private errorHandler: ErrorHandlerService,
                private counterItemService: CounterItemService) {
    }

    deleteCart() {
        this.cartHttpService.deleteCart().subscribe(() => {
            this.alertSuccess = true;
            this.counterItemService.updateQuantity(0);
        }, (error: HttpErrorResponse) => {
            if (error.status === 404) {
                this.counterItemService.updateQuantity(0);
                this.alertError = true;
                this.alertSuccess = false;
            }
        });
    }

    ngOnInit() {
        this.deleteCart();
    }

}
