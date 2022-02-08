import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCallService {
  // Initialize Firebase
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  
  constructor() { }
  
}
