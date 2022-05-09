import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private LoginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    localStorage.clear();
    console.log(localStorage.getItem('loggedUser'));
  }

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

  getUsers(): void {
    this.usuarios = this.LoginService.getUsers();
    console.log(this.usuarios);
  }

  inicioSesion():void {
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
    console.log(this.existeUsuario);
    console.log(this.loggedUser);
    console.log(localStorage.getItem('loggedUser'));
  }
}
