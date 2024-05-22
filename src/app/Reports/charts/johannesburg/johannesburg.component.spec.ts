import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohannesburgComponent } from './johannesburg.component';

describe('JohannesburgComponent', () => {
  let component: JohannesburgComponent;
  let fixture: ComponentFixture<JohannesburgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JohannesburgComponent]
    });
    fixture = TestBed.createComponent(JohannesburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
