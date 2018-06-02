import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service'
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  domain = 'http://localhost:3000'; //dev

  attachmentList:any = [];
  fileUploader: FileUploader;
  options: FileUploaderOptions = {};
  cb;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    
    this.authService.loadToken();
    this.fileUploader = new FileUploader({ url: this.domain + '/auth/imageUpload' 
                                          });
    this.fileUploader.onCompleteItem = (item, response, status, headers)=>{
      this.cb();
    };
  }

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
  uploadFile(id, cb){
    if(this.fileUploader.queue.length > 0 ){
      // this.fileUploader.onCompleteItem = (item, response, status, headers)=>{
      //   cb();
      // };
      this.cb = cb;
      this.authService.loadToken();
      this.options.headers = [{ name: 'x-auth-token', value: this.authService.authToken }]
      this.fileUploader.queue[0].file.name = id;
      this.fileUploader.setOptions(this.options);
      this.fileUploader.uploadAll();
    }else{
      cb();
    }
  }

  getAllOrders(){
  	this.authService.createAuthenticationHeaders();    
    return this.http.get(this.domain + '/auth/orders', this.authService.options ); 
  }


}
