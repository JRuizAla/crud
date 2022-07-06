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

  async onClick():Promise<void>{
    let loginUser: User = {email: '', username:'', password:''};
    console.log(loginUser);
    loginUser.username = this.loginUsername.value;
    loginUser.password = this.loginPassword.value;
    loginUser.email = await this.LoginService.getUserEmail(loginUser.username);
    console.log(loginUser);
    this.login(loginUser);
  }

  login(loginData: User) {
    console.log("recibido en el login", loginData);
    this.LoginService
      .login(loginData)
      .then(() => this.router.navigate(['/crud']))
      .catch((e) => console.log(e.message));
  }

  onClickRegister():void{
    this.router.navigate(['/register']);
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
