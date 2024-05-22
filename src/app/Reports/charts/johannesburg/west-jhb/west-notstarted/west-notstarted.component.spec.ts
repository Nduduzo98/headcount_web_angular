import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestNotstartedComponent } from './west-notstarted.component';

describe('WestNotstartedComponent', () => {
  let component: WestNotstartedComponent;
  let fixture: ComponentFixture<WestNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestNotstartedComponent]
    });
    fixture = TestBed.createComponent(WestNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
