import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
//test
const routes: Routes = [
  // { path: '', 
  // 	component: HomeComponent, 
  // 	children: [
  // 		{ path: '', loadChildren: './product/product.module#ProductModule' }
  // 	]
  // },
  // { path: '', component: HomeComponent },

  { path: '', loadChildren: './product.module/product.module#ProductModule' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', loadChildren: './product.module/product.module#ProductModule' }
  
  // { path: 'products', loadChildren: './products/products.module#ProductsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
