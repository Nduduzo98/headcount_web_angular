import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastNotstartedComponent } from './east-notstarted.component';

describe('EastNotstartedComponent', () => {
  let component: EastNotstartedComponent;
  let fixture: ComponentFixture<EastNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastNotstartedComponent]
    });
    fixture = TestBed.createComponent(EastNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
