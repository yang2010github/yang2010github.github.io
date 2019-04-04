import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-drive2',
  templateUrl: './template-drive2.component.html',
  styleUrls: ['./template-drive2.component.styl']
})
export class TemplateDrive2Component implements OnInit {

  categories = [
    {id: 1, name: 'Development'},
    {id: 1, name: 'Art'},
    {id: 1, name: 'Languages'}
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(x) {
    console.log(x);
  }

  log(x) {
    console.log(x);
  }
}
