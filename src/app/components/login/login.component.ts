import { Component } from '@angular/core';
import { User } from 'src/app/mocks/user';
import { LoginService } from 'src/app/services/login.service';

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

  usuario = new User(0, '', '');

  usuarios: User[] = [];
  
  existeUsuario: boolean|undefined = undefined;

  getUsers(): void {
    this.usuarios = this.LoginService.getUsers();
  }

  inicioSesion(username: string, password: string): void {
    let encontrado = this.usuarios.find(x => x.username === username && x.password === password);
    if (encontrado) {
      this.existeUsuario = true;
    }
    else{ this.existeUsuario = false;}
    console.log(encontrado);
  }


}
