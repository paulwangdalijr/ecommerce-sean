import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
  	private productService: ProductService,
  	private cartService: CartService
  ) { }

  ngOnInit() {
  	console.log("CART COMPONENT")
  }

}
