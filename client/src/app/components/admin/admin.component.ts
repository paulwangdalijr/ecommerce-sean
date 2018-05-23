import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../product.module/services/product.service';
import { Product } from '../../product.module/models/product';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products;
  constructor(
  	private authService: AuthService,
  	private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	// this.authService.getAdminProfile().subscribe((profile:any) => {
   //    if(profile.success){
   //      // this.email = profile.user.username;
   //      this.getAllProducts();
   //    }else{
   //      this.router.navigate(['/profile']);
   //    }
   //  })
   this.getAllProducts();

  }

  getAllProducts(){
    this.products = [];
    this.productService.getAllProducts().subscribe((data:any)=>{
      data.rows.forEach(element => {
        let ProductItem = new Product();
        ProductItem.id = element.ID;
        ProductItem.description = element.description;
        ProductItem.name = element.name;
        ProductItem.price = element.price;
        ProductItem.quantity = element.quantity;
        ProductItem.property = JSON.parse(element.property);
        this.products.push(ProductItem);
      });
      // this.Products=data.rows;
    });
  }

}
