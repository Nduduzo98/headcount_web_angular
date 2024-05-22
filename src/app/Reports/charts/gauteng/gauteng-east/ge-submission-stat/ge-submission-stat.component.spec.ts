import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeSubmissionStatComponent } from './ge-submission-stat.component';

describe('GeSubmissionStatComponent', () => {
  let component: GeSubmissionStatComponent;
  let fixture: ComponentFixture<GeSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(GeSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
