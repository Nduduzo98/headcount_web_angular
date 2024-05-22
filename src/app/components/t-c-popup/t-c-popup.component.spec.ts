import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCPopupComponent } from './t-c-popup.component';

describe('TCPopupComponent', () => {
  let component: TCPopupComponent;
  let fixture: ComponentFixture<TCPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCPopupComponent]
    });
    fixture = TestBed.createComponent(TCPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
