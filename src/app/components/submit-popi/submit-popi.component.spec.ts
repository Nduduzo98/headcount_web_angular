import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPopiComponent } from './submit-popi.component';

describe('SubmitPopiComponent', () => {
  let component: SubmitPopiComponent;
  let fixture: ComponentFixture<SubmitPopiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPopiComponent]
    });
    fixture = TestBed.createComponent(SubmitPopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
