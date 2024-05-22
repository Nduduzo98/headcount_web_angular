import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsInprogressComponent } from './es-inprogress.component';

describe('EsInprogressComponent', () => {
  let component: EsInprogressComponent;
  let fixture: ComponentFixture<EsInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsInprogressComponent]
    });
    fixture = TestBed.createComponent(EsInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
