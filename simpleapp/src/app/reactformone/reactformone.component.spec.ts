import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactformoneComponent } from './reactformone.component';

describe('ReactformoneComponent', () => {
  let component: ReactformoneComponent;
  let fixture: ComponentFixture<ReactformoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactformoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactformoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
