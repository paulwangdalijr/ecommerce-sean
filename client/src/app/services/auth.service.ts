import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken;
  authEmail;
  jwtHelper;
  options;

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
    return this.http.get(this.domain + "/auth/profile", this.options);
  }  

  getAdminProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + "/auth/adminprofile", this.options);
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
    return this.http.post(this.domain + '/auth/login', form);   
  }
}

