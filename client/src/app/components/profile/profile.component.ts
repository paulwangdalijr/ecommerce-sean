import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  email;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  	this.authService.getProfile().subscribe((profile:any) => {
      if(profile.success){
        this.email = profile.user.username;
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

}
