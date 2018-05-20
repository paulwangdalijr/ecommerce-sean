import { Component, OnInit } from '@angular/core';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log("product component")
  }

}
