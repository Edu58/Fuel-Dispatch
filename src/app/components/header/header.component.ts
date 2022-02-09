import { Component, OnInit } from '@angular/core';
import { FirebaseCallService } from '../../Services/firebase-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(public userLogin: FirebaseCallService, private router: Router) { }
  loginUser() {
    this.userLogin.login()
    this.router.navigate(['search'])
  }

  logoutUser() {
    this.userLogin.logout()
  }

  ngOnInit(): void {
    
  }
}
