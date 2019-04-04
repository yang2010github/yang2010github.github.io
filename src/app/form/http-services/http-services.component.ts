import { BadInputError as BadInputError } from './../../common/bad-input-error';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './app-error';
import { HttpPostService } from './httpPost.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.styl']
})
export class HttpServicesComponent implements OnInit {
  result: any[];
  constructor(private service: HttpPostService) {
  }

  onkeyup(input: HTMLInputElement) {
    const post = {title: input.value};
    this.service.create(input)
    .subscribe(
      response => {
      post['id'] = response['id'];
      this.result.splice(0, 0, post);
      console.log(response);
    }, (error: AppError) => {
      if (error instanceof BadInputError) {
        alert(error.origianlError);
      } else { throw error; }
    });
  }

  onUpdate(post) {
    this.service.update(post)
      .subscribe(
        response => {
        console.log(response);
        post['title'] = 'testAAA';
    });
  }

  onDelete(post) {
    const index = this.result.indexOf(post);
    this.service.Delete(433)
    .subscribe(
      response => {
      console.log(response);
      this.result.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else { throw error; }
    });
  }

  ngOnInit() {
    this.service.getPost()
    .subscribe(response => {
      this.result = response as any[];
    });
  }

}
