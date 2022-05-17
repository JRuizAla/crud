import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import usersData from 'src/app/mocks/usuarios.json';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  getUsers(): User[] {
    return usersData;
  }
  
  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }
}
