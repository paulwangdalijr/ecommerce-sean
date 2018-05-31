import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthService } from '../../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart = [];
  constructor(
    private authService: AuthService
    ) { }

  // addToCart(product:Product){
  // 	this.cart.push(product);

  // }
  addToCart(product, qty){
    let temp = { 
        id: product.id, 
        name: product.name, 
        description: product.description,
        price: product.price,
        quantity: qty,
        property: product.property };
    if(this.authService.loggedIn()){
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart[this.cart.length] = temp
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }else{
      this.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
      this.cart[this.cart.length] = temp;
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  remoteFromCart(id){
    let i = this.cart.findIndex(prod => prod.id === id);
    this.cart.splice(i, 1);

    if(this.authService.loggedIn()){     
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }else{
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  getCart(){
    if(this.authService.loggedIn()){
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }else{
      this.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    }

  }
  clearCart(){
    this.cart = [];
    if(this.authService.loggedIn()){     
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }else{
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
