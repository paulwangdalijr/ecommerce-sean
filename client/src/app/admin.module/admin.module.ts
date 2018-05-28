import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
<<<<<<< HEAD
import { AdminComponent } from './admin.component';
=======
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
<<<<<<< HEAD
  declarations: [ProductsComponent, CategoriesComponent, AdminComponent]
=======
  declarations: [ProductsComponent, CategoriesComponent]
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b
})
export class AdminModule { }
