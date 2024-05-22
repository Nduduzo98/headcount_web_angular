import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedibengEastComponent } from './sedibeng-east.component';

describe('SedibengEastComponent', () => {
  let component: SedibengEastComponent;
  let fixture: ComponentFixture<SedibengEastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedibengEastComponent]
    });
    fixture = TestBed.createComponent(SedibengEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
