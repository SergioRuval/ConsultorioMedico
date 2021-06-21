import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnfermeraComponent } from './main-enfermera.component';

describe('MainEnfermeraComponent', () => {
  let component: MainEnfermeraComponent;
  let fixture: ComponentFixture<MainEnfermeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEnfermeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
