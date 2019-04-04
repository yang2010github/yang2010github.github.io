import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.styl']
})

export class NewCourseFormComponent {
  form;


  // form = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     topics: new FormArray([])
  // });

  addTopic(topic: HTMLInputElement) {
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
}

