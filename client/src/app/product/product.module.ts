import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './/product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductComponent, CartComponent]
})
export class ProductModule { }
