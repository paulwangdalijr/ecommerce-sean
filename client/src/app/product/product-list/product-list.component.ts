import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  itemMargin;
  cardWidth;
  constructor(
  	private productService: ProductService
  ) { }

  ngOnInit() {
    this.itemMargin='list-item-4';
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
