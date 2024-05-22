import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkurhuleniComponent } from './ekurhuleni.component';

describe('EkurhuleniComponent', () => {
  let component: EkurhuleniComponent;
  let fixture: ComponentFixture<EkurhuleniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkurhuleniComponent]
    });
    fixture = TestBed.createComponent(EkurhuleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
