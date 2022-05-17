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

  usuarios: User[] = [];
  existeUsuario: boolean | undefined = undefined;
  loggedUser: User|undefined = undefined;

  
  constructor(private LoginService: LoginService, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getUsers();
    localStorage.clear();
    console.log(localStorage.getItem('loggedUser'));
  }

  getUsers(): void {
    this.usuarios = this.LoginService.getUsers();
    console.log(this.usuarios);
  }

  inicioSesion(content:any):void {
    for  (let i = 0; i < this.usuarios.length; i++){
      if (
        this.loginUsername.value === this.usuarios[i].username &&
        this.loginPassword.value === this.usuarios[i].password
      ){this.existeUsuario = true;
        this.loggedUser = this.usuarios[i];
        localStorage.setItem('loggedUser', this.loggedUser.username);
        this.router.navigate(['/crud']);
        break;} 
      else {this.existeUsuario = false; localStorage.clear();}
    };
    if(!this.existeUsuario){this.open(content);};
    console.log(this.existeUsuario);
    console.log(this.loggedUser);
    console.log(localStorage.getItem('loggedUser'));
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'error login'});
  }

}
