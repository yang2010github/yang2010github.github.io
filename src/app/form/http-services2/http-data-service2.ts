import { HttpNotFoundError } from './http-not-found-error';
import { HttpInputError } from './http-input-error';
import { AppError2 } from './app-Error2';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class HttpDataService2 {
  private http: HttpClient;
  constructor(private url: string) {
  }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      catchError(this.errorHandle)
    );
  }

  create(resource) {
    const post = {title: resource.value};
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError(this.errorHandle)
    );
  }

  update(resource) {
    // return throwError(new HttpInputError('Can not update item.'));
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({title: resource.title}))
    .pipe(
      catchError(this.errorHandle)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError(this.errorHandle)
    );
  }

  private errorHandle(error: HttpErrorResponse) {
    if (error.status === 400) {
        return throwError(new HttpInputError(error));
    }

    if (error.status === 404) {
      return throwError(new HttpNotFoundError(error));
    }

    return throwError(new AppError2(error));
  }
}
