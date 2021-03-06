import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './/product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';
// import { SharedFormModule} from '../shared-form/shared-form.module'
import { SharedFormModule} from '../shared-form/shared-form.module'

import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedFormModule
  ],
  declarations: [ProductListComponent, ProductComponent, CartComponent, CheckoutComponent, PaymentComponent]
})
export class ProductModule { }
