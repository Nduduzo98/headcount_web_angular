import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwNotstartedComponent } from './sw-notstarted.component';

describe('SwNotstartedComponent', () => {
  let component: SwNotstartedComponent;
  let fixture: ComponentFixture<SwNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwNotstartedComponent]
    });
    fixture = TestBed.createComponent(SwNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
