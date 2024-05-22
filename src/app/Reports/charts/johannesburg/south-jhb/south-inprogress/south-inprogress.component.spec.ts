import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthInprogressComponent } from './south-inprogress.component';

describe('SouthInprogressComponent', () => {
  let component: SouthInprogressComponent;
  let fixture: ComponentFixture<SouthInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthInprogressComponent]
    });
    fixture = TestBed.createComponent(SouthInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
