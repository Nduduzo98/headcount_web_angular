import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeCompletedComponent } from './se-completed.component';

describe('SeCompletedComponent', () => {
  let component: SeCompletedComponent;
  let fixture: ComponentFixture<SeCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeCompletedComponent]
    });
    fixture = TestBed.createComponent(SeCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
