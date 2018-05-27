import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SocialComponent } from './components/social/social.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

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
  { path: 'social/:token', component: SocialComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '**', loadChildren: './product.module/product.module#ProductModule' }
  
  // { path: 'products', loadChildren: './products/products.module#ProductsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
