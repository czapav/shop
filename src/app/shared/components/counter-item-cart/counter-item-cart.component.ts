import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CounterItemService} from '../../services/counter-item.service';


@Component({
    selector: 'app-counter-item-cart',
    templateUrl: './counter-item-cart.component.html',
    styleUrls: ['./counter-item-cart.component.scss']
})
export class CounterItemCartComponent implements OnInit {

    private counterItemCart = '';


    constructor(private counterItemService: CounterItemService) {
        this.counterItemService.currentCounter.subscribe(c => this.counterItemCart = c);
    }

    getQuantity() {
        this.counterItemService.currentCounter.subscribe(c => this.counterItemCart = c);
    }

    ngOnInit() {
        this.getQuantity();
    }
}





