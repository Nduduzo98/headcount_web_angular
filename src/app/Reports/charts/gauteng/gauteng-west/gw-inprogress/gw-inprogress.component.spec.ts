import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwInprogressComponent } from './gw-inprogress.component';

describe('GwInprogressComponent', () => {
  let component: GwInprogressComponent;
  let fixture: ComponentFixture<GwInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GwInprogressComponent]
    });
    fixture = TestBed.createComponent(GwInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
