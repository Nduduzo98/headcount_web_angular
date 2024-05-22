import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDistrictsComponent } from './all-districts.component';

describe('AllDistrictsComponent', () => {
  let component: AllDistrictsComponent;
  let fixture: ComponentFixture<AllDistrictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDistrictsComponent]
    });
    fixture = TestBed.createComponent(AllDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
