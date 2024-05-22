import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCompletedComponent } from './gw-completed.component';

describe('GwCompletedComponent', () => {
  let component: GwCompletedComponent;
  let fixture: ComponentFixture<GwCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GwCompletedComponent]
    });
    fixture = TestBed.createComponent(GwCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
