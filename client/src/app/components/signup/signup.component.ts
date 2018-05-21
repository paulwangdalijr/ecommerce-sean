import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router
             ){ 
    this.createForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      // Field validators, this will update the form.controls.[control name].errors/valid in the HTML
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        this.validatePassword
      ])],
      confirm: ['', Validators.required]
    }, 
    //Form validator, this will update the form.valid/form.errors in the HTML
    { 
      validator: this.matchingPasswords('password', 'confirm') 
    })
  }  

  ngOnInit() {
  }

  // Validators
  validateEmail(controls){
    const regExp = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    );

    if(regExp.test(controls.value)){
      return null;
    }else{
      return { 'validateEmail': true }
    }

  }
  validatePassword(controls){
    const regExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,35})/
    );

    if(regExp.test(controls.value)){
      return null;
    }else{
      return { 'validatePassword': true }
    }

  }
  matchingPasswords(password, confirm){
    return(group:FormGroup) => {
      if(group.controls[password].value === group.controls[confirm].value){
        return null;
      }else{
        return { 'matchingPasswords': true }
      }
    }
  } 

}
