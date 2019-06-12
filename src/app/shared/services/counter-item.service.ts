import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterItemService {

    private counterSubject = new BehaviorSubject(null);
    currentCounter = this.counterSubject.asObservable();

    constructor() {
    }

    updateQuantity(counter: number) {
        this.counterSubject.next(counter);
    }
}
