import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCallService {
  /* Initialize Firebase
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  */
  
  constructor(public auth: AngularFireAuth) { }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  logout() {
    this.auth.signOut()
  }
  
}
