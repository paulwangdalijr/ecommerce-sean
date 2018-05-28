import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AdminRoutingModule } from './admin-routing.module';
<<<<<<< HEAD
import { AdminComponent } from './admin.component';
=======
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
<<<<<<< HEAD
	{path: '', component: AdminComponent, children: 
	[ 
		{path: '', component: ProductsComponent},
		{path: 'categories', component: CategoriesComponent}
	]}
=======
	{path: '', component: ProductsComponent},
	{path: 'categories', component: CategoriesComponent},
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
