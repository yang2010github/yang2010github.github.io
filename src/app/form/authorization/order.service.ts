import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders (
      {'Authorization': 'Bearer ' + token}
    );

    return this.http.get('/api/orders', {headers: headers});
  }
}
