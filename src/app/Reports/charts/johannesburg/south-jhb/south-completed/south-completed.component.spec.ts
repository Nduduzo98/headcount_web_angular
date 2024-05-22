import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthCompletedComponent } from './south-completed.component';

describe('SouthCompletedComponent', () => {
  let component: SouthCompletedComponent;
  let fixture: ComponentFixture<SouthCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthCompletedComponent]
    });
    fixture = TestBed.createComponent(SouthCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
