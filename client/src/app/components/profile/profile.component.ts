import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DetailsformService } from '../../shared-form/detailsform.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  messageClass;
  message;
  input;
  constructor(
    private authService: AuthService,
    private router: Router,
    private detailsFormService: DetailsformService
    ) { 
  }
  
  ngOnInit() {
    this.detailsFormService.goBackLink = "";    
    this.detailsFormService.operation = "Update";
    this.detailsFormService.emailFlag = true;
    this.detailsFormService.detailsFlag = false;
    // this.detailsFormService.onClick = (x)=>{this.click(x)};
    this.detailsFormService.onClick = ()=>{ this.click() };
    // this.detailsFormService.onClick = this.click;
    
  	// this.authService.getProfileDetails().subscribe((profile:any) => {
    //   if(profile.success){
    //     this.detailsFormService.email = this.authService.profile.user.email;
    //     this.detailsFormService.name = this.authService.profile.profile.user.name;
    //     this.detailsFormService.address = this.authService.profile.user.address;
    //     this.detailsFormService.mobile = this.authService.profile.user.mobile;
    //   }
    //   else{
    //     if(localStorage.getItem('type') !== 'admin'){
    //       this.authService.logout();
    //       this.router.navigate(['']);
    //     }else{
    //       this.router.navigate(['admin']);          
    //     }
    //   }  
      this.detailsFormService.email = this.authService.profile.email;
      this.detailsFormService.name = this.authService.profile.name;
      this.detailsFormService.address = this.authService.profile.address;
      this.detailsFormService.mobile = this.authService.profile.mobile;
    // })
  }
  click(){
    let user = { name: this.detailsFormService.name, address: this.detailsFormService.address, mobile: this.detailsFormService.mobile };
    this.authService.editProfile(user).subscribe((data:any)=>{
      if(data.success){
        this.messageClass = "alert alert-success";
        this.message = data.message;      
      }else{
        this.messageClass = "alert alert-danger";
        this.message = data.message;
      }
      setTimeout(()=>{
        this.messageClass = "";
        this.message = "";
      }, 2000);
    });
  }

}
