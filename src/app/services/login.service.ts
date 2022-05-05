import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import usersData from 'src/app/mocks/usuarios.json';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsers(): User[] {
    return usersData;
  }
}
