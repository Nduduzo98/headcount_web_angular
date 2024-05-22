import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestInprogressComponent } from './west-inprogress.component';

describe('WestInprogressComponent', () => {
  let component: WestInprogressComponent;
  let fixture: ComponentFixture<WestInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestInprogressComponent]
    });
    fixture = TestBed.createComponent(WestInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
