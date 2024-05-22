import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerMortalityComponent } from './learner-mortality.component';

describe('LearnerMortalityComponent', () => {
  let component: LearnerMortalityComponent;
  let fixture: ComponentFixture<LearnerMortalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnerMortalityComponent]
    });
    fixture = TestBed.createComponent(LearnerMortalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
