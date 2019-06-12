import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CartComponent} from './pages/cart/cart.component';
import {AboutComponent} from './pages/about/about.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CategoryComponent} from './pages/category/category.component';
import {CategoryDetailComponent} from './shared/components/category-detail/category-detail.component';
import {ProductComponent} from './pages/product/product.component';
import {InternalServerComponent} from './pages/internal-server/internal-server.component';
import {OrderDoneComponent} from './pages/order-done/order-done.component';
import {CartDetailComponent} from './shared/components/cart-detail/cart-detail.component';
import {SearchComponent} from './pages/search/search.component';
import {SearchItemComponent} from './shared/components/search-item/search-item.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent,
        children: [
            {
                path: '',
                redirectTo: '/cart/cart-detail',
                pathMatch: 'full'
            },
            {
                path: 'cart-detail',
                component: CartDetailComponent
            },
            {
                path: 'order',
                component: OrderDoneComponent
            }]
    },
    {
        path: 'category',
        component: CategoryComponent,
        children: [
            {
                path: ':name',
                component: CategoryDetailComponent
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'product',
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: ':id',
                component: ProductComponent
            }
        ]
    },
    {
        path: 'search',
        component: SearchComponent,
        children: [
            {
                path: ':searchWord',
                component: SearchItemComponent
            }
        ]
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '500',
        component: InternalServerComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
