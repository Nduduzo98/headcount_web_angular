import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnNotstartedComponent } from './gn-notstarted.component';

describe('GnNotstartedComponent', () => {
  let component: GnNotstartedComponent;
  let fixture: ComponentFixture<GnNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GnNotstartedComponent]
    });
    fixture = TestBed.createComponent(GnNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
