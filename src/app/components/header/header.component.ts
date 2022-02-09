import { Component, OnInit } from '@angular/core';
import { FirebaseCallService } from '../../Services/firebase-call.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(public userLogin: FirebaseCallService) { }
  loginUser() {
    this.userLogin.login()
  }

  logoutUser() {
    this.userLogin.logout()
  }

  ngOnInit(): void {
    
  }
}
