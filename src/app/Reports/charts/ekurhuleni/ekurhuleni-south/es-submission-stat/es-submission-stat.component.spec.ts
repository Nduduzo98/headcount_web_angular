import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSubmissionStatComponent } from './es-submission-stat.component';

describe('EsSubmissionStatComponent', () => {
  let component: EsSubmissionStatComponent;
  let fixture: ComponentFixture<EsSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(EsSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
