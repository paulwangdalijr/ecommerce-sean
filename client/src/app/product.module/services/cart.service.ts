import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart:Product[] = [];
  constructor() { }

  // addToCart(product:Product){
  // 	this.cart.push(product);

  // }
  addToCart(product:Product, qty:number){
  	let cartProduct = new Product();
  	cartProduct.id = product.id;
  	cartProduct.quantity = qty;
  	this.cart.push(product);

  	console.log(product);
  }
}
