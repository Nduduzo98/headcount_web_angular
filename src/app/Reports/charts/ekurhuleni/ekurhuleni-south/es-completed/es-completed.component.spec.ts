import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsCompletedComponent } from './es-completed.component';

describe('EsCompletedComponent', () => {
  let component: EsCompletedComponent;
  let fixture: ComponentFixture<EsCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsCompletedComponent]
    });
    fixture = TestBed.createComponent(EsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
