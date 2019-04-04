import { BadInputError } from './../common/bad-input-error';
import { PostService } from './../services/post.service';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.styl']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(response => this.posts = response);
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value};
    // Avoid create delay, create first then call service, if failed rollback.
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
    .subscribe(
      response => {
      post.id = response['id'];
      // post['id'] = response.id;
      console.log(response);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          alert('This post has already been deleted.');
        } else { throw error; }
      });
  }

  updatePost(post) {
    // Patch only pass and update the specific field, but neet server has this service to support
    this.service.update(post)
    .subscribe(resonese => console.log('PUT call successful value returned in body', resonese));
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(34511)
    .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if  (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else { throw error; }
      });
  }
}
