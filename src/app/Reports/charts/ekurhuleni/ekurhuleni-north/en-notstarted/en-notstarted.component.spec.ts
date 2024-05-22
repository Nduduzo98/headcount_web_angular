import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnNotstartedComponent } from './en-notstarted.component';

describe('EnNotstartedComponent', () => {
  let component: EnNotstartedComponent;
  let fixture: ComponentFixture<EnNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnNotstartedComponent]
    });
    fixture = TestBed.createComponent(EnNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
