import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  domain = 'http://localhost:3000'; //dev

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get(this.domain + '/api/product/getProducts' ); 
  }


}
