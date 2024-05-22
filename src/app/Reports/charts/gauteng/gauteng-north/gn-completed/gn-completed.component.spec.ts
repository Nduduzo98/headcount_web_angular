import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnCompletedComponent } from './gn-completed.component';

describe('GnCompletedComponent', () => {
  let component: GnCompletedComponent;
  let fixture: ComponentFixture<GnCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GnCompletedComponent]
    });
    fixture = TestBed.createComponent(GnCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
