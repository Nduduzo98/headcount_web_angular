import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatersEditComponent } from './repeaters-edit.component';

describe('RepeatersEditComponent', () => {
  let component: RepeatersEditComponent;
  let fixture: ComponentFixture<RepeatersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepeatersEditComponent]
    });
    fixture = TestBed.createComponent(RepeatersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
