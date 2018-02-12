import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresRutasComponent } from './errores-rutas.component';

describe('ErroresRutasComponent', () => {
  let component: ErroresRutasComponent;
  let fixture: ComponentFixture<ErroresRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroresRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroresRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
