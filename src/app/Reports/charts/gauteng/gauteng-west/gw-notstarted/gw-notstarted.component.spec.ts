import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwNotstartedComponent } from './gw-notstarted.component';

describe('GwNotstartedComponent', () => {
  let component: GwNotstartedComponent;
  let fixture: ComponentFixture<GwNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GwNotstartedComponent]
    });
    fixture = TestBed.createComponent(GwNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
