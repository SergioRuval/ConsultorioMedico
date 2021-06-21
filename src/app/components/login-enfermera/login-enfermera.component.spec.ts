import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnfermeraComponent } from './login-enfermera.component';

describe('LoginEnfermeraComponent', () => {
  let component: LoginEnfermeraComponent;
  let fixture: ComponentFixture<LoginEnfermeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEnfermeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
