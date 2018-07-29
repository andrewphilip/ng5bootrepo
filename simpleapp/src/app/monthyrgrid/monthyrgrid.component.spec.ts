import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthyrgridComponent } from './monthyrgrid.component';

describe('MonthyrgridComponent', () => {
  let component: MonthyrgridComponent;
  let fixture: ComponentFixture<MonthyrgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthyrgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthyrgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
