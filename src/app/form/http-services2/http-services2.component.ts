import { HttpNotFoundError } from './http-not-found-error';
import { HttpInputError } from './http-input-error';
import { AppError2 } from './app-Error2';
import { Http2Service } from './http2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'http-services2',
  templateUrl: './http-services2.component.html',
  styleUrls: ['./http-services2.component.styl']
})
export class HttpServices2Component implements OnInit {
  result: any[];

  constructor(private service: Http2Service) {}

  ngOnInit() {
    this.service.getAll()
    .subscribe(arg => this.result = <any[]>arg);
  }

  onCreate(input: HTMLInputElement) {
    const post = {title: input.value};
    (<any[]>this.result).splice(0, 0, post);

    this.service.create(input.value)
    .subscribe(
      arg => {
        post['id'] = arg['id'];
    }, (error: AppError2) => {
      this.result.splice(0, 1);
      if (error instanceof HttpInputError) {
        alert(error.originalError);
      } else { throw error; }
    });
  }

  onUpdate(input) {
    const index = this.result.indexOf(input);
    const title = input['title'];
    input['title'] = 'testAAA';
    this.service.update(input)
    .subscribe(
      arg => {
      }, (error: AppError2) => {
        input['title'] = title;
        alert(error.originalError);
      });
  }

  onDelete(input) {
    const index = this.result.indexOf(input);
    this.result.splice(index, 1);
    this.service.delete(input.id)
    .subscribe(
        null,
        (error: AppError2) => {
          this.result.splice(index, 0, input);
          if (error instanceof HttpNotFoundError) {
            alert(error.originalError);
          } else {throw error; }
        }
    );
  }


}
