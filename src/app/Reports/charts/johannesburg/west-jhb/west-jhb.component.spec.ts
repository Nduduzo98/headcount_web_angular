import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestJhbComponent } from './west-jhb.component';

describe('WestJhbComponent', () => {
  let component: WestJhbComponent;
  let fixture: ComponentFixture<WestJhbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestJhbComponent]
    });
    fixture = TestBed.createComponent(WestJhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
