import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnInprogressComponent } from './gn-inprogress.component';

describe('GnInprogressComponent', () => {
  let component: GnInprogressComponent;
  let fixture: ComponentFixture<GnInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GnInprogressComponent]
    });
    fixture = TestBed.createComponent(GnInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
