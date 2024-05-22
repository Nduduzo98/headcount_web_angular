import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeNotstartedComponent } from './se-notstarted.component';

describe('SeNotstartedComponent', () => {
  let component: SeNotstartedComponent;
  let fixture: ComponentFixture<SeNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeNotstartedComponent]
    });
    fixture = TestBed.createComponent(SeNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
