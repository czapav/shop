import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {CartComponent} from './pages/cart/cart.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CategoryComponent} from './pages/category/category.component';
import {CategoryDetailComponent} from './shared/components/category-detail/category-detail.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {CategoryListComponent} from './shared/components/category-list/category-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductPromoComponent} from './shared/components/product-promo/product-promo.component';
import {LoadingSpinnerComponent} from './shared/components/loading-spinner/loading-spinner.component';
import {ProductBoxComponent} from './shared/components/product-box/product-box.component';
import {ProductComponent} from './pages/product/product.component';
import {CounterComponent} from './shared/components/counter/counter.component';
import {FormsModule} from '@angular/forms';
import {CounterItemCartComponent} from './shared/components/counter-item-cart/counter-item-cart.component';
import {InternalServerComponent} from './pages/internal-server/internal-server.component';
import {AuthInterceptor} from './shared/interceptor/auth.interceptor';
import {OrderDoneComponent} from './pages/order-done/order-done.component';
import { CartDetailComponent } from './shared/components/cart-detail/cart-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchItemComponent } from './shared/components/search-item/search-item.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CartComponent,
        PageNotFoundComponent,
        CategoryComponent,
        CategoryDetailComponent,
        HeaderComponent,
        FooterComponent,
        CategoryListComponent,
        ProductPromoComponent,
        LoadingSpinnerComponent,
        ProductBoxComponent,
        ProductComponent,
        CounterComponent,
        CounterItemCartComponent,
        InternalServerComponent,
        OrderDoneComponent,
        CartDetailComponent,
        SearchComponent,
        SearchItemComponent,
        SearchFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
