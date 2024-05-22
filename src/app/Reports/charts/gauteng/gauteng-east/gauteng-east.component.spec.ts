import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GautengEastComponent } from './gauteng-east.component';

describe('GautengEastComponent', () => {
  let component: GautengEastComponent;
  let fixture: ComponentFixture<GautengEastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GautengEastComponent]
    });
    fixture = TestBed.createComponent(GautengEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
