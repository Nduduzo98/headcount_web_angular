import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeInprogressComponent } from './ge-inprogress.component';

describe('GeInprogressComponent', () => {
  let component: GeInprogressComponent;
  let fixture: ComponentFixture<GeInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeInprogressComponent]
    });
    fixture = TestBed.createComponent(GeInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
