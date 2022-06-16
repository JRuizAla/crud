import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import usersData from 'src/app/mocks/usuarios.json';
import { Router } from '@angular/router';
import {Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  successfulLogin: boolean = false;

  constructor(private router:Router, private auth: Auth) { }

  getUsers(): User[] {
    return usersData;
  }

  closeSesion(): void{
    localStorage.clear();
    this.router.navigate(['']);
  }

  login({ username, password }: User) {
    return signInWithEmailAndPassword(this.auth, username, password).then(()=> this.successfulLogin=true);
  }

  register({ username, password }: User) {
    return createUserWithEmailAndPassword(this.auth, username, password)
  }

  logout() {
    this.router.navigate(['']);
    return signOut(this.auth).then(()=> this.successfulLogin=false);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(()=> this.successfulLogin=true);;
  }
}
