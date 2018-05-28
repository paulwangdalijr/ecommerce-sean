import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  redirectURL;
  constructor(
  	private authService: AuthService,
  	private router: Router
  	){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	
  	this.redirectURL = state.url;

  	if(this.authService.loggedIn()){
      if(localStorage.getItem('type') === 'admin'){
        this.router.navigate(['/admin']);
        return false;
      }else{
  		  return true;
      }
  	}else{
  		this.router.navigate(['/login']);
  		return false;
  	}
  }
}
