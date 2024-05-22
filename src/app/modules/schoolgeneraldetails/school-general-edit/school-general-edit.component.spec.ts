import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGeneralEditComponent } from './school-general-edit.component';

describe('SchoolGeneralEditComponent', () => {
  let component: SchoolGeneralEditComponent;
  let fixture: ComponentFixture<SchoolGeneralEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolGeneralEditComponent]
    });
    fixture = TestBed.createComponent(SchoolGeneralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
