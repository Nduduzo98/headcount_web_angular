import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityEditComponent } from './disability-edit.component';

describe('DisabilityEditComponent', () => {
  let component: DisabilityEditComponent;
  let fixture: ComponentFixture<DisabilityEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisabilityEditComponent]
    });
    fixture = TestBed.createComponent(DisabilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
