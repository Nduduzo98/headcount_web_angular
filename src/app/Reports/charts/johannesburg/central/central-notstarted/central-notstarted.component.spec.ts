import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralNotstartedComponent } from './central-notstarted.component';

describe('CentralNotstartedComponent', () => {
  let component: CentralNotstartedComponent;
  let fixture: ComponentFixture<CentralNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralNotstartedComponent]
    });
    fixture = TestBed.createComponent(CentralNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
