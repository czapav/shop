import {Component, OnInit} from '@angular/core';
import {CartHttpService} from '../../services/cart-http.service';
import {CounterItemService} from '../../services/counter-item.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private cartHttpService: CartHttpService, private counterItemService: CounterItemService) {
    }

    ngOnInit() {
        this.cartHttpService.getQuantity().subscribe(o => {
            this.counterItemService.updateQuantity(o.quantity);
        }, (error: HttpErrorResponse) => {
            if (error.status === 404) {
                this.counterItemService.updateQuantity(0);
            }
        });
    }

}
