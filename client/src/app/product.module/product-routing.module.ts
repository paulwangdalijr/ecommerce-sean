import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from './product.component';
import { CartComponent } from './components/cart/cart.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            { path: '', 
              component: ProductListComponent,
              children: [
                { path: '', 
                  component: CartComponent 
                }
              ]
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }