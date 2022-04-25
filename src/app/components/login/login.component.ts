import { Component } from '@angular/core';
import { User } from 'src/app/mocks/user';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { breakStatement } from '@babel/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  loginUsername = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  loginPassword = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  usuario = new User(0, '', '');

  usuarios: User[] = [];

  existeUsuario: boolean | undefined = undefined;

  getUsers(): void {
    this.usuarios = this.LoginService.getUsers();
    console.log(this.usuarios);
  }

  inicioSesion():void {
    for  (let i = 0; i < this.usuarios.length; i++){
      if (
        this.loginUsername.value === this.usuarios[i].username &&
        this.loginPassword.value === this.usuarios[i].password
      ){this.existeUsuario = true;break;} 
      else {this.existeUsuario = false;}
    };
    console.log(this.existeUsuario);
  }
}
