import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralInprogressComponent } from './central-inprogress.component';

describe('CentralInprogressComponent', () => {
  let component: CentralInprogressComponent;
  let fixture: ComponentFixture<CentralInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralInprogressComponent]
    });
    fixture = TestBed.createComponent(CentralInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
