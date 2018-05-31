import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsformService {
  email;
  name;
  address;
  mobile;
  operation;
  goBackLink;
  detailsFlag;
  emailFlag;
  confirmFlag;
  constructor() { }

  onClick(){
  }
  clearFields(){
    this.email = "";
    this.name = "";
    this.address = "";
    this.mobile = "";
  }
}
