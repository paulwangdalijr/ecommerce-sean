import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
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
  SelectedProduct = new Product();
  SelectedProperty = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  addToCart(){
    let product = new Product();
    product.id = 111;
    product.quantity = 1;
    this.cartService.addToCart(product, 1);
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

  onProductSelect(product: Product){
    this.SelectedProduct = product;
    // console.log(product);
    // console.log(Object.getOwnPropertyNames(product.property));
    this.SelectedProperty = Object.getOwnPropertyNames(product.property);
  }

  ngOnInit() {
    this.getAllProducts();
    this.itemMargin='col-4';
    // this.cardWidth = 'w-30';
    $(document).ready(function(){
      $('.add-to-cart').on('click', function () {
        var cart = $('.fa-shopping-cart');
        var imgtodrag = $(this).parent().parent().find("img").eq(0);
        // console.log(imgtodrag);
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
      });
    });
  }
  

}
