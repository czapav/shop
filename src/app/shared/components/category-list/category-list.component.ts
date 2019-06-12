import {Component, OnInit} from '@angular/core';
import {ProductHttpService} from '../../services/product-http.service';
import {ErrorHandlerService} from '../../services/error-handler.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    listCategories = [];

    constructor(private productHttpServiece: ProductHttpService, private errorHandler: ErrorHandlerService) {
    }

    getCategories() {
        this.productHttpServiece.getCategories().subscribe(categories => {
                this.listCategories = categories;
            },
            (error) => {
                this.errorHandler.handleError(error);
            });
    }

    ngOnInit() {
        return this.getCategories();
    }

}
