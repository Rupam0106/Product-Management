import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireAuth: AngularFireAuth) {}
  googleLogin() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  getName(){
    this.fireAuth.user;
  }
}
