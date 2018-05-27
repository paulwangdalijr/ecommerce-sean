import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
  	private productService: ProductService,
  	private cartService: CartService,
  	private authService: AuthService
  ) { }

  ngOnInit() {  	
    // if(this.authService.loggedIn()){
    //   this.cartService.cart = JSON.parse(localStorage.getItem('cart')) || [];
    //   console.log("local")
    // }else{
    //   this.cartService.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    //   console.log("session")
    // }
    this.cartService.getCart();
    console.log(this.cartService.cart);

  }



}
