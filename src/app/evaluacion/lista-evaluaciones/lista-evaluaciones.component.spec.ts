import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEvaluacionesComponent } from './lista-evaluaciones.component';

describe('ListaEvaluacionesComponent', () => {
  let component: ListaEvaluacionesComponent;
  let fixture: ComponentFixture<ListaEvaluacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEvaluacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
