import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthCompletedComponent } from './north-completed.component';

describe('NorthCompletedComponent', () => {
  let component: NorthCompletedComponent;
  let fixture: ComponentFixture<NorthCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthCompletedComponent]
    });
    fixture = TestBed.createComponent(NorthCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
