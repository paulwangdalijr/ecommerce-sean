import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken;
  authEmail;
  userType;
  jwtHelper;
  options;
  testing;

  domain = 'http://localhost:3000'; //dev

  constructor(
  	private http: HttpClient
  	) { 

  	this.jwtHelper = new JwtHelperService()
  }

  loadToken(){
    const token = localStorage.getItem('x-auth-token');
    this.authToken = token;
  }

  loggedIn(){
    // return tokenNotExpired();'
    // console.log(this.authToken);
    let x = true;
    this.loadToken();
    try{
      x = this.jwtHelper.isTokenExpired(this.authToken);
    }catch(e){
      x = true;
      this.logout();
    }
    // console.log(x);
    // return !this.jwtHelper.isTokenExpired(this.authToken);
    return !x;
  }

  checkEmail(email){
    return this.http.get(this.domain + "/auth/checkEmail/" + email);
  }
  registerUser(user){
    return this.http.post(this.domain + '/auth/register', user);        

  }
  storeUserToken(token){
    localStorage.setItem('x-auth-token', token);
    this.authToken = token;
  }
  storeUseremail(email){  	
    localStorage.setItem('email', email);
    this.authEmail = email;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + "/auth/profile", this.options).pipe(
      map((data:any)=>{
        if(data.success){
          this.authEmail = data.user.username;
        }
        return data;
      }));      
  }  

  getAdminProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + "/auth/adminprofile", this.options);
    // return this.http.get(this.domain + "/auth/adminprofile", this.options).
    //   pipe(
    //     map((data:any)=>{
    //       return data.success;
    //     }));
  }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-auth-token': this.authToken
      })
    }
  }

  logout(){
    this.authToken = null;
    this.authEmail = null;
    localStorage.clear();
  }

  login(form){
    return this.http.post(this.domain + '/auth/login', form).pipe(
      map((data:any)=>{
        if(data.success){
          this.authEmail = data.user.username;
          this.userType = data.user.type;
          console.log(this.userType);
        }
        return data;
      }));
  }
  isAdmin(){
    if(localStorage.getItem('type') === 'admin'){
      return true;
    }else{
      return false;
    }
  }
}

