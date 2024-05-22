import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnantEditComponent } from './pregnant-edit.component';

describe('PregnantEditComponent', () => {
  let component: PregnantEditComponent;
  let fixture: ComponentFixture<PregnantEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PregnantEditComponent]
    });
    fixture = TestBed.createComponent(PregnantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
