import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
	{path: '', component: ProductsComponent},
	{path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
