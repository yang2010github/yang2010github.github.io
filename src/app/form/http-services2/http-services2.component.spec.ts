import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServices2Component } from './http-services2.component';

describe('HttpServices2Component', () => {
  let component: HttpServices2Component;
  let fixture: ComponentFixture<HttpServices2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServices2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
