import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeNotstartedComponent } from './ge-notstarted.component';

describe('GeNotstartedComponent', () => {
  let component: GeNotstartedComponent;
  let fixture: ComponentFixture<GeNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeNotstartedComponent]
    });
    fixture = TestBed.createComponent(GeNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
