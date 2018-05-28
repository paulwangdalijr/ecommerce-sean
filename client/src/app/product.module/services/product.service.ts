import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  domain = 'http://localhost:3000'; //dev

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAllProducts(){
    return this.http.get(this.domain + '/api/product/getProducts' ); 
  }

  addNewProduct(x_product, x_cat_prod){
  	this.authService.createAuthenticationHeaders();
  	let req = { product: x_product, cat_prod: x_cat_prod}
  	return this.http.post(this.domain + '/auth/newProduct', req, this.authService.options ); 
  }
  editProduct(x_product, x_cat_prod){
    this.authService.createAuthenticationHeaders();
    let req = { product: x_product, cat_prod: x_cat_prod}
    return this.http.put(this.domain + '/auth/editProduct', req, this.authService.options ); 
  }


}
