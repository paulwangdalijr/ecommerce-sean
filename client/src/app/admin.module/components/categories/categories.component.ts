import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../product.module/services/product.service';
=======
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
<<<<<<< HEAD
  
  categories = [];
  newCategory = "";
  selectedCategory = {};

  constructor(
  	private authService: AuthService,
  	private productService: ProductService
  	) { }

  ngOnInit() {
  	this.getAllCategories();
  }

  getAllCategories(){
    this.productService.getAllProducts().subscribe((data:any)=>{
      this.categories = data.category;
  	});
  }
  addCategory(){
    this.productService.addCategory(this.newCategory).subscribe((data:any)=>{
      this.getAllCategories();
      this.newCategory = "";
    });
  }
  onDeleteClick(category){
    this.selectedCategory = category;
  }
  deleteCategory(){
    this.productService.deleteCategory(this.selectedCategory.ID).subscribe((data:any)=>{
      this.getAllCategories();
    });
=======

  constructor() { }

  ngOnInit() {
>>>>>>> ee0dd8f3b46aa18f4b33cbbcf6dfbb9f42eec79b
  }

}
