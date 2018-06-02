import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [
	{path: '', component: AdminComponent, children: 
	[ 
		{path: '', component: ProductsComponent},
		{path: 'categories', component: CategoriesComponent},
		{path: 'orders', component: OrdersComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
