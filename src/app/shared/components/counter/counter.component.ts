import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CartHttpService} from '../../services/cart-http.service';
import {ErrorHandlerService} from '../../services/error-handler.service';
import {CounterItemService} from '../../services/counter-item.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {

    public counterProduct = 1;

    @Output()
    emitCounter = new EventEmitter<number>();

    @Input() receivedParentCounter: number;
   // @Input() receivedParentProduct: string = '';

    constructor(private cartHttpService: CartHttpService, private errorHandler: ErrorHandlerService,
                private counterItemService: CounterItemService) {

    }

    ngOnChanges() {
        this.counterProduct = this.receivedParentCounter;
    }

    increment() {
        this.emitCounter.emit(this.counterProduct += 1);

        // console.log(this.receivedParentCounter);
        // console.log(this.receivedParentProduct);


    }

    decrement() {
        if (this.counterProduct > 1) {
            this.emitCounter.emit(this.counterProduct -= 1);
        }
    }

    update(counter: string) {
        this.emitCounter.emit(this.counterProduct = +counter);
    }

    ngOnInit() {
    }

}
