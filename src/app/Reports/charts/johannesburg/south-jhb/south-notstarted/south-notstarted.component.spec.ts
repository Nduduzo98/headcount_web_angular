import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthNotstartedComponent } from './south-notstarted.component';

describe('SouthNotstartedComponent', () => {
  let component: SouthNotstartedComponent;
  let fixture: ComponentFixture<SouthNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthNotstartedComponent]
    });
    fixture = TestBed.createComponent(SouthNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
