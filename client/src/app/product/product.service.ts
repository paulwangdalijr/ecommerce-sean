import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  count = 0;
  constructor() { }

  addToCart(){
    this.count += 1;
    // return this.count;
  }
}
