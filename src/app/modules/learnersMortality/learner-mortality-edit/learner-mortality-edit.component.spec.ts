import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerMortalityEditComponent } from './learner-mortality-edit.component';

describe('LearnerMortalityEditComponent', () => {
  let component: LearnerMortalityEditComponent;
  let fixture: ComponentFixture<LearnerMortalityEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnerMortalityEditComponent]
    });
    fixture = TestBed.createComponent(LearnerMortalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
