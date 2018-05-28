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
<<<<<<< HEAD
  deleteProduct(id){
  	this.authService.createAuthenticationHeaders();
  	return this.http.delete(this.domain + '/auth/deleteProduct/'+ id, this.authService.options ); 
  }

  addCategory(name){
    this.authService.createAuthenticationHeaders();
    let req = { category: name };
    return this.http.post(this.domain + '/auth/newCategory', req, this.authService.options ); 
  }
  deleteCategory(id){
    this.authService.createAuthenticationHeaders();
    return this.http.delete(this.domain + '/auth/deleteCategory/'+ id, this.authService.options ); 
  }
=======
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b


}
