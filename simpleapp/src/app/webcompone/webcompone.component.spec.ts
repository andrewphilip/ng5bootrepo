import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponeComponent } from './webcompone.component';

describe('WebcomponeComponent', () => {
  let component: WebcomponeComponent;
  let fixture: ComponentFixture<WebcomponeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcomponeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
