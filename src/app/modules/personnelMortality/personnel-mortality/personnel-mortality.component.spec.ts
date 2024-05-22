import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelMortalityComponent } from './personnel-mortality.component';

describe('PersonnelMortalityComponent', () => {
  let component: PersonnelMortalityComponent;
  let fixture: ComponentFixture<PersonnelMortalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelMortalityComponent]
    });
    fixture = TestBed.createComponent(PersonnelMortalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
