import {Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductHttpService} from '../../services/product-http.service';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

    showSpinner = true;
    searchProducts: Array<Product> = [];
    category = '';

    constructor(private route: ActivatedRoute, private productHttpServiece: ProductHttpService,) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.route.paramMap.subscribe((param: Params) => {
                const searchText = param.get('searchWord');
                this.category = `Wynik wyszukiwania dla frazy: ${searchText}`;
                this.productHttpServiece.getSearchText(searchText).subscribe(p => {
                    this.searchProducts = p;
                    this.showSpinner = false;
                });
            });
        }, 500);
    }
}
