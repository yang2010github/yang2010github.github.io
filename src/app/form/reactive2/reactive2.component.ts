import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.styl']
})
export class Reactive2Component implements OnInit {
  form = new FormGroup({
     account: new FormGroup({
      oldPassword: new FormControl('', [
        Validators.required
      ],
      PasswordValidators.matchOldPassword
      )
     }),
     newPassword: new FormControl('', [
      Validators.required
    ]),
     confirmPassword: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: PasswordValidators.passwordShouldMatch
  });

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  createUser() {
    this.form.setErrors({
      invalidCreateUser: true
    });
  }

  get oldPassword() {
    return this.form.get('account.oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
