import { AppErrorHandler } from './../../common/app-error-handler';
import { BadInputError } from './../../common/bad-input-error';
import { AppError } from './../../common/app-error';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { NotFoundError } from 'src/app/common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {
  private url = 'https://my-json-server.typicode.com/typicode/demo/posts';
  constructor(private http: HttpClient) {
  }

  getPost() {
    return this.http.get(this.url)
    .pipe(catchError(this.handelError));
  }

  create(resource) {
    const post = {title: resource.value};
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(catchError(this.handelError));
  }

  update(resource) {
    this.http.put(this.url + '/' + resource.id, JSON.stringify(resource));
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({title: 'testAAA'}))
    .pipe(catchError(this.handelError));
  }

  Delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(catchError(this.handelError));
  }

  private handelError(error: HttpErrorResponse) {
      if (error.status === 400) {
        return throwError(new BadInputError(error));
      }

      if (error.status === 404) {
        return throwError(new NotFoundError(error));
      }

      return throwError(new AppError(error));
  }
}
