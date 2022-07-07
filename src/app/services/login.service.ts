import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  CollectionReference,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  successfulLogin: boolean = false;
  loggedUsername!: string;
  usersCollection: CollectionReference = collection(this.firestore, 'users');

  constructor(
    private router: Router,
    private auth: Auth,
    private firestore: Firestore
  ) {}

  closeSesion(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

  login({ email, username, password }: User) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => (this.successfulLogin = true))
      .then(() => (this.loggedUsername = username));
  }

  register({ email, username, password }: User) {
    let newUser: User = { email, username, password: '' };
    this.addUser(newUser);
    console.log('added user :', newUser);
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    this.router.navigate(['']);
    return signOut(this.auth).then(() => (this.successfulLogin = false));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      () => (this.successfulLogin = true)
    );
  }

  addUser(user: User) {
    return addDoc(this.usersCollection, user);
  }

  async getUserEmail(id: string): Promise<string> {
    let email: string = '';
    const q = query(this.usersCollection, where('email', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data(), "query", doc.get('email'));
       email = doc.get('email');
       console.log("email obetnido = " , email)
    });
    return email;
  }

  async getUserEmailByUsername(id: string): Promise<string> {
    let email: string = '';
    const q = query(this.usersCollection, where('username', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data(), "query", doc.get('email'));
       email = doc.get('email');
       console.log("email obetnido = " , email)
    });
    return email;
  }

  async getUsername(id: string): Promise<string> {
    let username: string = '';
    const q = query(this.usersCollection, where('username', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data(), "query", doc.get('email'));
       username = doc.get('username');
       console.log("username obetnido = " , username)
    });
    return username;
  }

  async getUsernameByEmail(id: string): Promise<string> {
    let username: string = '';
    const q = query(this.usersCollection, where('email', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data(), "query", doc.get('email'));
       username = doc.get('username');
       console.log("username obetnido = " , username)
    });
    return username;
  }
}
