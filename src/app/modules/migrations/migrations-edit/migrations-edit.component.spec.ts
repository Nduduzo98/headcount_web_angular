import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationsEditComponent } from './migrations-edit.component';

describe('MigrationsEditComponent', () => {
  let component: MigrationsEditComponent;
  let fixture: ComponentFixture<MigrationsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrationsEditComponent]
    });
    fixture = TestBed.createComponent(MigrationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
