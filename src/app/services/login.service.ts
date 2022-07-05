import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import {Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  successfulLogin: boolean = false;
  loggedUsername!: string;

  constructor(private router:Router, private auth: Auth) { }

  closeSesion(): void{
    localStorage.clear();
    this.router.navigate(['']);
  }

  login({ username, password }: User) {
    return signInWithEmailAndPassword(this.auth, username, password).then(()=> this.successfulLogin=true).then(()=> this.loggedUsername = username);
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

  getUsername():string{
    return this.loggedUsername;
  }
}
