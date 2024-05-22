import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGeneralCheckComponent } from './school-general-check.component';

describe('SchoolGeneralCheckComponent', () => {
  let component: SchoolGeneralCheckComponent;
  let fixture: ComponentFixture<SchoolGeneralCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolGeneralCheckComponent]
    });
    fixture = TestBed.createComponent(SchoolGeneralCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
