import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestCompletedComponent } from './west-completed.component';

describe('WestCompletedComponent', () => {
  let component: WestCompletedComponent;
  let fixture: ComponentFixture<WestCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestCompletedComponent]
    });
    fixture = TestBed.createComponent(WestCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
