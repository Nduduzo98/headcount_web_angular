import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeCompletedComponent } from './ge-completed.component';

describe('GeCompletedComponent', () => {
  let component: GeCompletedComponent;
  let fixture: ComponentFixture<GeCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeCompletedComponent]
    });
    fixture = TestBed.createComponent(GeCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
