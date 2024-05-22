import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GautengNorthComponent } from './gauteng-north.component';

describe('GautengNorthComponent', () => {
  let component: GautengNorthComponent;
  let fixture: ComponentFixture<GautengNorthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GautengNorthComponent]
    });
    fixture = TestBed.createComponent(GautengNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
