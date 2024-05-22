import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedibengComponent } from './sedibeng.component';

describe('SedibengComponent', () => {
  let component: SedibengComponent;
  let fixture: ComponentFixture<SedibengComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedibengComponent]
    });
    fixture = TestBed.createComponent(SedibengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
