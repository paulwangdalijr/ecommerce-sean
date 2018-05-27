import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  	this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLoginSubmit(){
    this.form.disable();
    const form = {
      username: this.form.get("email").value,
      password: this.form.get("password").value
    };
   this.authService.login(form).subscribe((data:any)=>{
     if(!data.success){
       this.form.enable();  
     }else{
       this.authService.storeUserToken(data.token);
       this.authService.storeUseremail(data.user.username);
       sessionStorage.clear();
       setTimeout(()=>{
         if(data.user.type !== 'admin'){
           this.router.navigate(['']);
         }else{
           this.router.navigate(['/admin']);
         }
       },1000);
     }
   });
  }

}
