import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeInprogressComponent } from './se-inprogress.component';

describe('SeInprogressComponent', () => {
  let component: SeInprogressComponent;
  let fixture: ComponentFixture<SeInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeInprogressComponent]
    });
    fixture = TestBed.createComponent(SeInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
