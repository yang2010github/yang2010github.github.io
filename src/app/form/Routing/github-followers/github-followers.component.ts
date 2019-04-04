import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
    followers: any[];
    constructor(
      private service: GithubFollowersService,
      private route: ActivatedRoute) {}

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        console.log('page:' + page + ', id:' + id);
      // this.service.getAll({id: id, page: page})
         return this.service.getAll();
      })
    )
    .subscribe((followers: any[]) => {
      this.followers = followers;
    });

    // this.route.paramMap.subscribe();
    // this.route.queryParamMap.subscribe();

// after click the  route is change. so this code doen't execute, except use subscribe.
    // const id = this.route.snapshot.paramMap.get('id');
    // const page = this.route.snapshot.queryParamMap.get('page');
  }
}
