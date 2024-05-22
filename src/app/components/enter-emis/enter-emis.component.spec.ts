import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterEmisComponent } from './enter-emis.component';

describe('EnterEmisComponent', () => {
  let component: EnterEmisComponent;
  let fixture: ComponentFixture<EnterEmisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterEmisComponent]
    });
    fixture = TestBed.createComponent(EnterEmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
