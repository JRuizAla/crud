import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginUsername = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  loginPassword = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  users: User[] = [];
  loggedUser: User|undefined = undefined;


  constructor(private LoginService: LoginService, private router: Router, private modalService: NgbModal) {}

  open(content: any):void {
    this.modalService.open(content, {ariaLabelledBy: 'error login'});
  }

  onClick():void{
    let loginUser: User = {username:'',password:''};
    console.log(loginUser);
    loginUser.username = this.loginUsername.value;
    loginUser.password = this.loginPassword.value;
    console.log(loginUser);
    this.login(loginUser);
  }

  login(loginData: User) {
    this.LoginService
      .login(loginData)
      .then(() => this.router.navigate(['/crud']))
      .catch((e) => console.log(e.message));
  }

  onClickRegister():void{
    let loginUser:User = {username:'',password:''};
    loginUser.username = this.loginUsername.value;
    loginUser.password = this.loginPassword.value;
    console.log(loginUser);
    this.register(loginUser);
  }

  register(data: User) {
    this.LoginService
      .register(data)
      .then(() => this.router.navigate(['']))
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle() {
    this.LoginService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/crud']))
      .catch((e) => console.log(e.message));
  }
}
