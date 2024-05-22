import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictOfficialComponent } from './district-official.component';

describe('DistrictOfficialComponent', () => {
  let component: DistrictOfficialComponent;
  let fixture: ComponentFixture<DistrictOfficialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictOfficialComponent]
    });
    fixture = TestBed.createComponent(DistrictOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
