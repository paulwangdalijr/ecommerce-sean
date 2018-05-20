import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//test
const routes: Routes = [
  // { path: '', 
  // 	component: HomeComponent, 
  // 	children: [
  // 		{ path: '', loadChildren: './product/product.module#ProductModule' }
  // 	]
  // },
  // { path: '', component: HomeComponent },

  { path: '', loadChildren: './product/product.module#ProductModule'},
  { path: 'about', component: AboutComponent }
  
  // { path: 'products', loadChildren: './products/products.module#ProductsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
