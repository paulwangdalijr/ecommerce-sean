import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  itemMargin;
  constructor(
  	private productService: ProductService
  ) { }

  ngOnInit() {
  	this.itemMargin='list-item-3';
  }

}
