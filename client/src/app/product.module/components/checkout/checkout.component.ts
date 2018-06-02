import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DetailsformService } from '../../../shared-form/detailsform.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  @ViewChild('confirmationModal') confirmationModal:ElementRef;
  @ViewChild('modalToggleBtn') modalToggleBtn:ElementRef;

  confirmed;
  processing;
  orderNumber;
  error;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private detailsFormService: DetailsformService,
    private router: Router    
    ) { }

  ngOnInit() {    
    this.cartService.getCart(); 
    if(this.cartService.cart.length !== 0){
      this.confirmed = false;
      this.processing = false;
      this.detailsFormService.goBackLink = "/cart";
      this.detailsFormService.operation = "Confirm";
      this.detailsFormService.clearFields();
      this.detailsFormService.onClick = ()=>{ this.click() };    
      if(this.authService.loggedIn()){
        this.authService.getProfileDetails().subscribe((profile:any) => {
          if(profile.success){
            this.detailsFormService.email = profile.user.email;
            this.detailsFormService.name = profile.user.name;
            this.detailsFormService.address = profile.user.address;
            this.detailsFormService.mobile = profile.user.mobile;

            this.detailsFormService.emailFlag = true;
            this.detailsFormService.detailsFlag = true;
          } 
        })
      }else{
        this.detailsFormService.detailsFlag = false;  
        this.detailsFormService.emailFlag = false;
              
      }
    }else{
      this.router.navigate(['/cart']);
    }
  }

  click(){
    this.modalToggleBtn.nativeElement.click();
  }
  modalToggle(){

  }
  
  onCreateOrderClick(){    
    this.modalToggleBtn.nativeElement.click();
    this.confirmed = true;
    this.processing = true;
    
    setTimeout(()=>{
      // this.processing = false;
      this.processing = false;    
    }, 2000);

    let user = {
      email: this.detailsFormService.email,
      name: this.detailsFormService.name,
      address: this.detailsFormService.address,
      mobile: this.detailsFormService.mobile
    }

    this.cartService.getCart();    
    if(this.authService.loggedIn()){
      this.authService.createOrder(user, this.cartService.cart).subscribe((data:any)=>{
        if(data.success){
          this.orderNumber = data.order;
          this.cartService.clearCart();
        }else{
          this.error = true;
        }
      });
    }else{
      this.authService.createOrderNotLoggedIn(user, this.cartService.cart).subscribe((data:any)=>{
        if(data.success){
          this.orderNumber = data.order;
          this.cartService.clearCart();
        }else{
          this.error = true;
        }
      });
    }


  }
}
