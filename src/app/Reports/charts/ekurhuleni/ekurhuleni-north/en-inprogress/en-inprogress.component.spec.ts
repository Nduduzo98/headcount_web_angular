import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnInprogressComponent } from './en-inprogress.component';

describe('EnInprogressComponent', () => {
  let component: EnInprogressComponent;
  let fixture: ComponentFixture<EnInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnInprogressComponent]
    });
    fixture = TestBed.createComponent(EnInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
