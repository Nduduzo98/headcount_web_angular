import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwInprogressComponent } from './sw-inprogress.component';

describe('SwInprogressComponent', () => {
  let component: SwInprogressComponent;
  let fixture: ComponentFixture<SwInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwInprogressComponent]
    });
    fixture = TestBed.createComponent(SwInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
