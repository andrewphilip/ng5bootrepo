import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormonecompComponent } from './formonecomp.component';

describe('FormonecompComponent', () => {
  let component: FormonecompComponent;
  let fixture: ComponentFixture<FormonecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormonecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormonecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
