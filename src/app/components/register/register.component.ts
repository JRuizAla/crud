import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loginEmail = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  loginUsername = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  loginPassword = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  emailExists: boolean = false;
  usernameExists: boolean = false;

  constructor(private loginService:LoginService, private router: Router) { }

  onClick():void{
    let loginUser:User = {email:'', username:'', password:''};
    loginUser.email = this.loginEmail.value;
    loginUser.username = this.loginUsername.value;
    loginUser.password = this.loginPassword.value;
    console.log(loginUser);
    this.loginService.register(loginUser);
    this.router.navigate(['']);
  }

  async checkEmail(){
    let currentEmail = this.loginEmail.value;
    let exists: string = '';
    exists = await this.loginService.getUserEmail(currentEmail);
    console.log("")
    console.log(" despues del await email:", exists)
    if(exists === ''){ this.emailExists = false;}
    else{ this.emailExists = true;}
    console.log(" despues del if emailexists:", this.emailExists)
    console.log("")
  }

  async checkUsername(){
    let currentUsername = this.loginUsername.value;
    let exists: string = '';
    exists = await this.loginService.getUsername(currentUsername);
    console.log("")
    console.log(" despues del await user:", exists)
    if(exists === ''){ this.usernameExists = false;}
    else{ this.usernameExists = true;}
    console.log(" despues del if usernameexists:", this.usernameExists)
    console.log("")
  }
}
