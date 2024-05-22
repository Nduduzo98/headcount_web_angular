import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLanguageComponent } from './home-language.component';

describe('HomeLanguageComponent', () => {
  let component: HomeLanguageComponent;
  let fixture: ComponentFixture<HomeLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLanguageComponent]
    });
    fixture = TestBed.createComponent(HomeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
