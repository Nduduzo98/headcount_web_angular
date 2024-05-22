import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSurveyComponent } from './complete-survey.component';

describe('CompleteSurveyComponent', () => {
  let component: CompleteSurveyComponent;
  let fixture: ComponentFixture<CompleteSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteSurveyComponent]
    });
    fixture = TestBed.createComponent(CompleteSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
