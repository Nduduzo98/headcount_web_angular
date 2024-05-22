import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsNotstartedComponent } from './es-notstarted.component';

describe('EsNotstartedComponent', () => {
  let component: EsNotstartedComponent;
  let fixture: ComponentFixture<EsNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsNotstartedComponent]
    });
    fixture = TestBed.createComponent(EsNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
