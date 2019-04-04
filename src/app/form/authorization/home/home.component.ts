import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class AuthorizationHomeComponent {

  constructor(public authService: AuthService) { }
}
