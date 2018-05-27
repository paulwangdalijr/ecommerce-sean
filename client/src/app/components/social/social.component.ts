import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(
    private authGuard: AuthGuard,
  	private authService: AuthService,
  	private route: ActivatedRoute,
  	private router: Router) 
  {
  	// this.authService.storeUserData(data.token, data.user);
  	// console.log(route.snapshot.url);
  	this.authService.storeUserToken(route.snapshot.params['token']);

  	this.authService.getProfile().subscribe((data:any) => {
      if(data.success){
        this.authService.storeUseremail(data.user);
        this.router.navigate(['']);
         sessionStorage.clear();
      }else{
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    })
  	// this.authService.storeUserData(route.snapshot.params['token'], '');
  }

  ngOnInit() {
  }

}
