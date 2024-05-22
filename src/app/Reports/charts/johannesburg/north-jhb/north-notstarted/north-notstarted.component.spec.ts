import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthNotstartedComponent } from './north-notstarted.component';

describe('NorthNotstartedComponent', () => {
  let component: NorthNotstartedComponent;
  let fixture: ComponentFixture<NorthNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthNotstartedComponent]
    });
    fixture = TestBed.createComponent(NorthNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
