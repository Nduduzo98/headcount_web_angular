import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshwaneComponent } from './tshwane.component';

describe('TshwaneComponent', () => {
  let component: TshwaneComponent;
  let fixture: ComponentFixture<TshwaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TshwaneComponent]
    });
    fixture = TestBed.createComponent(TshwaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
