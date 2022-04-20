import { Injectable } from '@angular/core';
import { User } from '../mocks/user';
import { USERS } from '../mocks/usuarioprueba';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
