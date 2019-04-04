import { HttpDataService2 } from './http-data-service2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http2Service extends HttpDataService2 {
  constructor() {
    super('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
