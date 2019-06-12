import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';

@Component({
    selector: 'app-product-box',
    templateUrl: './product-box.component.html',
    styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

    @Input() products: Array<Product> = [];
    @Input() category: string;

    constructor() {
    }

    ngOnInit() {
    }

}
