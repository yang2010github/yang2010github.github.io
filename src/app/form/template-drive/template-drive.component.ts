import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-drive',
  templateUrl: './template-drive.component.html',
  styleUrls: ['./template-drive.component.styl']
})
export class TemplateDriveComponent implements OnInit {
  methods = [
    {id: 1, name: 'cash'},
    {id: 2, name: 'check'},
    {id: 3, name: 'moneyorder'}
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }
}
