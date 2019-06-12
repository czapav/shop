import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductHttpService} from '../../services/product-http.service';
import {Product} from '../../interfaces/product';
import {ErrorHandlerService} from '../../services/error-handler.service';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

    category = '';
    listProducts: Array<Product> = [];
    showSpinner = true;

    constructor(private route: ActivatedRoute, private productHttpServiece: ProductHttpService, private errorHandler: ErrorHandlerService) {
    }

    getProductsByCategory(category: string) {
        this.productHttpServiece.getProductsByCategory(category).subscribe(products => {
                this.listProducts = products;
            },
            (error) => {
                this.errorHandler.handleError(error);
            });
    }

    ngOnInit() {
        this.route.paramMap.subscribe((param: Params) => {
            this.category = param.get('name');
            this.getProductsByCategory(this.category);
            this.showSpinner = false;
        });
    }

}
