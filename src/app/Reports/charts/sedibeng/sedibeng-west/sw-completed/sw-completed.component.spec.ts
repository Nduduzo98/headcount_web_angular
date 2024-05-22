import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCompletedComponent } from './sw-completed.component';

describe('SwCompletedComponent', () => {
  let component: SwCompletedComponent;
  let fixture: ComponentFixture<SwCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwCompletedComponent]
    });
    fixture = TestBed.createComponent(SwCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
