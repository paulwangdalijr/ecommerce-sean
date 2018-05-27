import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from './product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            { path: '', 
              component: ProductListComponent
              // ,
              // children: [
              //   { path: '', 
              //     component: CartComponent 
              //   }
              // ]
            }
        ]
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'payment',
      component: PaymentComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
