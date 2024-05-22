import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthJhbComponent } from './north-jhb.component';

describe('NorthJhbComponent', () => {
  let component: NorthJhbComponent;
  let fixture: ComponentFixture<NorthJhbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthJhbComponent]
    });
    fixture = TestBed.createComponent(NorthJhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
