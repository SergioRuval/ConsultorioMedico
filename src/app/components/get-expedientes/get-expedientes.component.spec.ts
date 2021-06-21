import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExpedientesComponent } from './get-expedientes.component';

describe('GetExpedientesComponent', () => {
  let component: GetExpedientesComponent;
  let fixture: ComponentFixture<GetExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetExpedientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
