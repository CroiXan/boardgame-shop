import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryDashboardComponent } from './category-dashboard/category-dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
    { path: '', component: CategoryDashboardComponent },
    { path: 'categoria/:id', component: ProductListComponent },
    { path: 'registro', component: RegistrationFormComponent }
];
