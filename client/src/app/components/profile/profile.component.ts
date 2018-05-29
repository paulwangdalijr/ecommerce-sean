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

  constructor(
    private authService: AuthService,
    private router: Router,
    private detailsFormService: DetailsformService
    ) { 
  }
  
  ngOnInit() {
  	this.authService.getProfile().subscribe((profile:any) => {
      if(profile.success){
        this.email = profile.user;
        this.detailsFormService.email = profile.user;
        console.log(this.detailsFormService.email);
        this.router.navigate(['/checkout'])
        // console.log(this.detailsFormService.email);
      }
      else{
        if(localStorage.getItem('type') !== 'admin'){
          this.authService.logout();
          this.router.navigate(['']);
        }else{
          this.router.navigate(['admin']);          
        }
      }   
    })
  }
  click(){
  }

}
