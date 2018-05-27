import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; 
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

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
  		return this.authService.getAdminProfile().pipe(
        map((data:any)=>{
    			if(data.success){
    				return true;
    			}else{
    				this.router.navigate(['/profile']);
    				return false;
          }
  			})
      );
  	}else{
  		this.router.navigate(['/login']);
  		return false;
  	}
  }
}
