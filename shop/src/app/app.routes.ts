import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDashboardComponent } from './category-dashboard/category-dashboard.component';

export const routes: Routes = [
    { path: '', component: CategoryDashboardComponent },
    { path: 'categoria/:id', component: ProductListComponent }
];
