import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../product.module/services/product.service';
import { Product } from '../../../product.module/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  modalTitle;
  productSelected = new Product();
  productSelectedCategories = [];
  productSelectedProperty;
  newPropertyName = "";
  newPropertyValue = "";
  operation;
  categories = [];
  cat_prod = [];

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
   this.productSelected.categories = [];
   this.getAllProducts();

  }

  getAllProducts(){
    this.products = [];
    this.productService.getAllProducts().subscribe((data:any)=>{
      data.product.forEach(element => {
        let ProductItem = new Product();
        ProductItem.id = element.ID;
        ProductItem.description = element.description;
        ProductItem.name = element.name;
        ProductItem.price = element.price;
        ProductItem.quantity = element.quantity;
        ProductItem.property = JSON.parse(element.property);
        this.products.push(ProductItem);

        let categories = [];
        data.cat_prod.forEach(element => {          
          if(ProductItem.id === element.PRODUCTID){
            categories.push(element.CATEGORYID);
          }
          
        });
        ProductItem.categories = categories;
      });
      this.categories = data.category;
      this.cat_prod = data.cat_prod;
      // this.Products=data.rows;
    });
  }

  setProductSelected(product){    
    let TempProduct = new Product();
    TempProduct.id = product.id;
    TempProduct.description = product.description;
    TempProduct.name = product.name;
    TempProduct.price = product.price;
    TempProduct.quantity = product.quantity;
    TempProduct.property = product.property;
    TempProduct.categories = product.categories || [];

    this.productSelectedCategories = [];
    this.categories.forEach(cat => {
      cat.checked = false;
    });
    TempProduct.categories.forEach(elem => {
      let cat_prod = {
        CATEGORYID: elem,
        PRODUCTID: TempProduct.id
      }
      
      let i = this.categories.findIndex(cat => cat.ID === elem);
      if(i >= 0){
        this.categories[i].checked = true;
      }
      this.productSelectedCategories.push(cat_prod);
    });
    this.productSelected = TempProduct;
    this.productSelectedProperty = Object.getOwnPropertyNames(TempProduct.property);
  }
  onEditProductClick(product){
    this.operation = "edit";
    this.modalTitle = "Edit Product";
    this.setProductSelected(product);
  }
  onViewProductClick(product){
    this.operation = "view";
    this.modalTitle = "View Product";
    this.setProductSelected(product);
  }
  onAddProductClick(){
    this.operation = "add";
    this.modalTitle = "Add Product";
    let product = new Product();
    product.property = {};
    this.setProductSelected(product); 
  }
  onDeletePropertyClick(product, property){
    delete product.property[property];
    this.setProductSelected(product);

    // let i = this.productSelectedProperty.indexOf(property)
    // this.productSelectedProperty.splice(i,1);
  }
  onAddPropertyClick(product){
    if(this.newPropertyName !== "" && this.newPropertyValue !== ""){
      product.property[this.newPropertyName] = this.newPropertyValue;
      this.newPropertyName = "";
      this.newPropertyValue = "";
      this.setProductSelected(product);
    }
  }
  onAddClick(){
    this.productService.addNewProduct(this.productSelected, this.productSelectedCategories).subscribe((data:any)=>{
      console.log(data);
    });
  }
  onUpdateClick(){
    this.productService.editProduct(this.productSelected, this.productSelectedCategories).subscribe((data:any)=>{
      console.log(data);
    });
  }

  onChangeCheckBox(event, catID, prodID){
    if(event === true){
      let cat_prod = {
        CATEGORYID: catID,
        PRODUCTID: prodID
      }
      this.productSelectedCategories.push(cat_prod);
    }else{
      let i = this.productSelectedCategories.findIndex(cat => cat.CATEGORYID === catID);
      this.productSelectedCategories.splice(i, 1);
    }
  }

  isChecked(categories, id){
    return categories.includes(id);
  }
  
}
