import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggingOut;
  constructor(
  	public authService: AuthService,
  	private router: Router
  	) { }

  ngOnInit() {
  }
  
  onLogoutClick(){
    this.authService.loggingOut = true;
    setTimeout(()=>{
      this.authService.logout();
      this.router.navigate(['']);
      this.authService.loggingOut = false;
    },2000);
  }

}
