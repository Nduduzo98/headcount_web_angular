import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkurhuleniNorthComponent } from './ekurhuleni-north.component';

describe('EkurhuleniNorthComponent', () => {
  let component: EkurhuleniNorthComponent;
  let fixture: ComponentFixture<EkurhuleniNorthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkurhuleniNorthComponent]
    });
    fixture = TestBed.createComponent(EkurhuleniNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
