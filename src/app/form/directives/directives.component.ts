import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.styl']
})
export class DirectivesComponent {
  // tslint:disable-next-line:no-output-rename
  @Output('changed') changed = new EventEmitter();

   courses: Course[];
  //  courses = [
  //   {id: 1, name: 'Course1'},
  //   {id: 2, name: 'Course2'},
  //   {id: 3, name: 'Course3'}
  // ];

  // courses =[];

  viewModel = 'map';
  isSelected = true;
  inputValue: string;

  constructor() { }

  loadingCourses() {
    this.courses = [
      {id: 1, name: 'Course1'},
      {id: 2, name: 'Course2'},
      {id: 3, name: 'Course3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    const index = this.courses.length + 1;
    const newItem: Course = {id: index, name: 'Course' + index.toString()};
    this.courses.push(newItem);
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }


  onClick(eventArgs) {
    // Two kind of way to get input value.
    console.log(this.inputValue);
    console.log(eventArgs.target.value);
    this.inputValue = this.inputValue.toUpperCase();
    this.changed.emit({name: 'mouseClick', selected: true});
  }
}

interface Course {
  // tslint:disable-next-line:semicolon
  id: number,
  // tslint:disable-next-line:semicolon
  name: string,
  // draw: () => void
}
