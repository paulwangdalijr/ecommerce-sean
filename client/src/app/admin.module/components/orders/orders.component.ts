import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.module/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;
  buyer:any={};
  selectedOrder:any = {};
  items;
  constructor(
  	private productService: ProductService    
  ) {
    this.getAllOrders();
    
   }

  ngOnInit() {
  }

  getAllOrders(){
    this.productService.getAllOrders().subscribe((data:any)=>{
      this.orders = data.orders;
      if(this.orders.length > 0){
        this.onRowSelect(this.orders[0]);
      }      
  	});
  }
  getPrice(items){
    let price = 0;
    
    try{    
      let l_items = JSON.parse(items);
      l_items.forEach((obj)=>{
        price += obj.price;
      });
    }catch(err){}
    return price;
  }
  onRowSelect(order){
    this.selectedOrder = order;
    this.buyer = JSON.parse(this.selectedOrder.buyer);

    // this.buyer.email = buyer.email
    // this.buyer.name = buyer.name
    // this.buyer.address = buyer.address
    // this.buyer.mobile = buyer.mobile
    
    this.items = JSON.parse(this.selectedOrder.items);
  }

}
