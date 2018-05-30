import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DetailsformService } from '../../../shared-form/detailsform.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  @ViewChild('confirmationModal') confirmationModal:ElementRef;
  @ViewChild('modalToggleBtn') modalToggleBtn:ElementRef;

  constructor(
    private authService: AuthService,
    private detailsFormService: DetailsformService
    ) { }

  ngOnInit() {
  	// email = "asd@asd.asd"
    if(this.authService.loggedIn()){
      this.detailsFormService.operation = "Confirm";
      this.detailsFormService.onClick = ()=>{ this.click() };
      this.authService.getProfileDetails().subscribe((profile:any) => {
        if(profile.success){
          this.detailsFormService.email = profile.user.email;
          this.detailsFormService.name = profile.user.name;
          this.detailsFormService.address = profile.user.address;
          this.detailsFormService.mobile = profile.user.mobile;
        } 
      })
    }
  }

  click(){
    // $(this.confirmationModal.nativeElement).modal('show');
    this.modalToggleBtn.nativeElement.click();
  }
  modalToggle(){

  }
}
