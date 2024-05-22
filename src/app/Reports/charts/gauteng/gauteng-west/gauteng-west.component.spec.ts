import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GautengWestComponent } from './gauteng-west.component';

describe('GautengWestComponent', () => {
  let component: GautengWestComponent;
  let fixture: ComponentFixture<GautengWestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GautengWestComponent]
    });
    fixture = TestBed.createComponent(GautengWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
