import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignaturaComponent } from './lista-asignatura.component';

describe('ListaAsignaturaComponent', () => {
  let component: ListaAsignaturaComponent;
  let fixture: ComponentFixture<ListaAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
