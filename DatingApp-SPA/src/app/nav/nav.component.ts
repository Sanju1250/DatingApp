import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
login() {
  this.authService.login(this.model).subscribe(next => {
    this.alertify.success('Logged in successfully');
  }, error => {
this.alertify.error(error);
  });
 }

 loggedIn() {
return this.authService.loggedIn();
 }

 loggedOut() {
   if (localStorage.getItem('token')) {
    this.alertify.message('Logged out');
   }
   localStorage.removeItem('token');
   sessionStorage.removeItem('token');
 }


}
