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

  loginUsername = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  loginPassword = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  constructor(private loginService:LoginService, private router: Router) { }

  onClick():void{
    let loginUser:User = {username:'',password:''};
    loginUser.username = this.loginUsername.value;
    loginUser.password = this.loginPassword.value;
    console.log(loginUser);
    this.loginService.register(loginUser);
    this.router.navigate(['']);
  }
}
