import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthJhbComponent } from './south-jhb.component';

describe('SouthJhbComponent', () => {
  let component: SouthJhbComponent;
  let fixture: ComponentFixture<SouthJhbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthJhbComponent]
    });
    fixture = TestBed.createComponent(SouthJhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
