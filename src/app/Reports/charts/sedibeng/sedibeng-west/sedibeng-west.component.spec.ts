import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedibengWestComponent } from './sedibeng-west.component';

describe('SedibengWestComponent', () => {
  let component: SedibengWestComponent;
  let fixture: ComponentFixture<SedibengWestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedibengWestComponent]
    });
    fixture = TestBed.createComponent(SedibengWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
