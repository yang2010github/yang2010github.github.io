import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrive2Component } from './template-drive2.component';

describe('TemplateDrive2Component', () => {
  let component: TemplateDrive2Component;
  let fixture: ComponentFixture<TemplateDrive2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrive2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
