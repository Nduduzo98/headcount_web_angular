import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCompletedComponent } from './en-completed.component';

describe('EnCompletedComponent', () => {
  let component: EnCompletedComponent;
  let fixture: ComponentFixture<EnCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnCompletedComponent]
    });
    fixture = TestBed.createComponent(EnCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
