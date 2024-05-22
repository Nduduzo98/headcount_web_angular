import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastInprogressComponent } from './east-inprogress.component';

describe('EastInprogressComponent', () => {
  let component: EastInprogressComponent;
  let fixture: ComponentFixture<EastInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastInprogressComponent]
    });
    fixture = TestBed.createComponent(EastInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
