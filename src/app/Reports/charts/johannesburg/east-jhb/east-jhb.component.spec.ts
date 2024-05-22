import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastJhbComponent } from './east-jhb.component';

describe('EastJhbComponent', () => {
  let component: EastJhbComponent;
  let fixture: ComponentFixture<EastJhbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastJhbComponent]
    });
    fixture = TestBed.createComponent(EastJhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
