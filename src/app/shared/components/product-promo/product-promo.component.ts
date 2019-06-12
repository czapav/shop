import {Component, OnInit} from '@angular/core';
import {ProductHttpService} from '../../services/product-http.service';
import {Product} from '../../interfaces/product';
import {ErrorHandlerService} from '../../services/error-handler.service';

@Component({
    selector: 'app-product-promo',
    templateUrl: './product-promo.component.html',
    styleUrls: ['./product-promo.component.scss']
})
export class ProductPromoComponent implements OnInit {

    listProducts: Array<Product> = [];
    showSpinner = true;
    category = 'Promocje i nowości';

    constructor(private productHttpServiece: ProductHttpService, private errorHandler: ErrorHandlerService) {
    }

    getProductsPromo() {
        this.productHttpServiece.getProductsPromo().subscribe(products => {
                this.listProducts = products;
            },
            (error) => {
                this.errorHandler.handleError(error);
            });
    }

    ngOnInit() {
        setTimeout(() => {
            this.getProductsPromo();
            this.showSpinner = false;
        }, 500);
    }
}
