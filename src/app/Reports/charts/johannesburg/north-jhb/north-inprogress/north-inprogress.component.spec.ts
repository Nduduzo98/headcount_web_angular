import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthInprogressComponent } from './north-inprogress.component';

describe('NorthInprogressComponent', () => {
  let component: NorthInprogressComponent;
  let fixture: ComponentFixture<NorthInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthInprogressComponent]
    });
    fixture = TestBed.createComponent(NorthInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
