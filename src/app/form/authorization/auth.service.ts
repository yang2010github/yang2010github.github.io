import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('/api/authenticate', JSON.stringify(credentials))
    .pipe(
     map(response => {
      if (response && response['token']) {
        localStorage.setItem('token', response['token']);
      }
      return true;
    }));
   }

   logout() {
     localStorage.removeItem('token');
   }

   isLoggedIn() {
     const token = localStorage.getItem('token');
     if (!token) {
      return false;
     }

     const helper = new JwtHelperService();
     const expirationDate  = helper.getTokenExpirationDate(token);
     const isExpired = helper.isTokenExpired(token);
     return isExpired;
   }

  get currentUser() {
    const token = localStorage.getItem('token');
     if (!token) {
      return null;
     }

     return new JwtHelperService().decodeToken(token);
  }
}
