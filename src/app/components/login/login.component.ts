import { Component } from '@angular/core';
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
  userExist: boolean | undefined = undefined;
  loggedUser: User|undefined = undefined;


  constructor(private LoginService: LoginService, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getUsers();
    localStorage.clear();
  }

  getUsers(): void {
    this.users = this.LoginService.getUsers();
  }

  inicioSesion(content:any):void {
    for  (let i = 0; i < this.users.length; i++){
      if (
        this.loginUsername.value === this.users[i].username &&
        this.loginPassword.value === this.users[i].password
      ){this.userExist = true;
        this.loggedUser = this.users[i];
        localStorage.setItem('loggedUser', this.loggedUser.username);
        this.router.navigate(['/crud']);
        break;} 
      else {this.userExist = false; localStorage.clear();}
    };
    if(!this.userExist){this.open(content);};
  }

  open(content: any):void {
    this.modalService.open(content, {ariaLabelledBy: 'error login'});
  }

}
