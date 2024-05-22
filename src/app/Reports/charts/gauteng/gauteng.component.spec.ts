import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GautengComponent } from './gauteng.component';

describe('GautengComponent', () => {
  let component: GautengComponent;
  let fixture: ComponentFixture<GautengComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GautengComponent]
    });
    fixture = TestBed.createComponent(GautengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
