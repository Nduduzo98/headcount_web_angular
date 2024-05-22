import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCompletedComponent } from './central-completed.component';

describe('CentralCompletedComponent', () => {
  let component: CentralCompletedComponent;
  let fixture: ComponentFixture<CentralCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralCompletedComponent]
    });
    fixture = TestBed.createComponent(CentralCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
