import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActividadComponent } from './detalles-actividad.component';

describe('DetallesActividadComponent', () => {
  let component: DetallesActividadComponent;
  let fixture: ComponentFixture<DetallesActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
