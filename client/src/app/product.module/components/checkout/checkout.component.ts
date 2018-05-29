import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DetailsformService } from '../../../shared-form/detailsform.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  // email;
  constructor(
    private authService: AuthService,
    private detailsFormService: DetailsformService
    ) { }

  ngOnInit() {
  	// email = "asd@asd.asd"
    console.log(this.detailsFormService.email);
  }

  onConfirmClick(){
  	console.log("click from checkout module");
  }
}
