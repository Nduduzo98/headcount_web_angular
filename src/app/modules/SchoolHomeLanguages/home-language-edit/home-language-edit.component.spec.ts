import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLanguageEditComponent } from './home-language-edit.component';

describe('HomeLanguageEditComponent', () => {
  let component: HomeLanguageEditComponent;
  let fixture: ComponentFixture<HomeLanguageEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLanguageEditComponent]
    });
    fixture = TestBed.createComponent(HomeLanguageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
