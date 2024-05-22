import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastCompletedComponent } from './east-completed.component';

describe('EastCompletedComponent', () => {
  let component: EastCompletedComponent;
  let fixture: ComponentFixture<EastCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastCompletedComponent]
    });
    fixture = TestBed.createComponent(EastCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
