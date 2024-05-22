import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelMortalityEditComponent } from './personnel-mortality-edit.component';

describe('PersonnelMortalityEditComponent', () => {
  let component: PersonnelMortalityEditComponent;
  let fixture: ComponentFixture<PersonnelMortalityEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelMortalityEditComponent]
    });
    fixture = TestBed.createComponent(PersonnelMortalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
