import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { AuthService } from '../../../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  itemMargin;
  cardWidth;
  products;
  categories;
  selectedCategories = [];
  SelectedProduct = new Product();
  SelectedProperty = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private authService: AuthService
  ) {

  }

  addToCart(img, product, qty){
    this.cartService.addToCart(product, qty);
    var cart = $('.fa-shopping-cart');
    var imgtodrag = $(img);
    if (imgtodrag) {
      var imgclone = imgtodrag.clone()
      .offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
      })
          .css({
          'opacity': '0.5',
              'position': 'absolute',
              'height': '150px',
              'width': '150px',
              'z-index': '100'
      })
          .appendTo($('body'))
          .animate({
          'top': cart.offset().top + 10,
              'left': cart.offset().left + 10,
              'width': 75,
              'height': 75
      }, 1000);
      
      // setTimeout(function () {
      //     cart.effect("shake", {
      //         times: 2
      //     }, 200);
      // }, 1500);

      imgclone.animate({
          'width': 0,
          'height': 0
      }, function () {
          $(this).detach()
      });
    }
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

        let categories = [];
        data.cat_prod.forEach(element => {          
          if(ProductItem.id === element.PRODUCTID){
            categories.push(element.CATEGORYID);
          }
          
        });
        ProductItem.categories = categories;
        this.products.push(ProductItem);

      });
      this.categories = data.category;
      // this.Products=data.rows;
    });
  }

  onProductSelect(product: Product){
    this.SelectedProduct = product;
    // console.log(product);
    // console.log(Object.getOwnPropertyNames(product.property));
    this.SelectedProperty = Object.getOwnPropertyNames(product.property);
  }

  onChangeCheckBox(checked, category){
    if(checked){
      this.selectedCategories.push({ id: category.ID, name: category.name });
    }else{
      // this.selectedCategories.splice(this.selectedCategories.indexOf(id), 1);
      let i = this.selectedCategories.findIndex(obj => obj.id === category.ID);
      this.selectedCategories.splice(i, 1);
    }

    this.products.forEach(product => {
      let flag = false;
      product.categories.forEach(cat =>{
        if(this.selectedCategories.findIndex(obj => obj.id === cat) >= 0){
          flag = true;
        }
        // else{
        //   product.show = false;
        // }
      });
      product.show = flag;
    });
    
    // this.updateCartFunction();

  }

  filterByCategory(categories){
    //console.log(this.selectedCategories + "     " +categories);
    categories.forEach((elem)=>{
       if(this.selectedCategories.includes(elem)){
         return true;
       }else{
         return false;
       }
    });
  }

  filterProducts(){    
      return this.products.filter(x => {
        if(this.selectedCategories.length === 0){
          return true;
        }else{
          return x.show;
        }
      });
    
    // console.log("ASDASD")
    // if(this.selectedCategories.length === 0 || this.products.filter(x => x.show)){
    //   return true;
    // }else{
    //   return false;
    // }
  }

  ngOnInit() {
    this.getAllProducts();
    this.itemMargin='col-4';
    // this.cardWidth = 'w-30'; 

    if(this.authService.loggedIn()){
      this.cartService.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }else{
      this.cartService.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    } 
    // this.updateCartFunction();  
  }

  // updateCartFunction(){
  //   $(document).ready(function(){
  //     console.log('test');
  //     $('.add-to-cart').on('click', function () {
        
  //     });
  //   });
  // }




}
