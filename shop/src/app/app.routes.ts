import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'categoria/:id', component: ProductListComponent },
    { path: 'categorias', component: CategoryListComponent }
];
