import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkurhuleniSouthComponent } from './ekurhuleni-south.component';

describe('EkurhuleniSouthComponent', () => {
  let component: EkurhuleniSouthComponent;
  let fixture: ComponentFixture<EkurhuleniSouthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkurhuleniSouthComponent]
    });
    fixture = TestBed.createComponent(EkurhuleniSouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
