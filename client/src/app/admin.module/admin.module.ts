import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { FileUploadModule } from 'ng2-file-upload'

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdminComponent } from './admin.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FileUploadModule
  ],
  declarations: [ProductsComponent, CategoriesComponent, AdminComponent, FileSelectDirective, OrdersComponent]
})
export class AdminModule { }
