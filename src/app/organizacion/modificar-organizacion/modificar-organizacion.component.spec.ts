import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarOrganizacionComponent } from './modificar-organizacion.component';

describe('ModificarOrganizacionComponent', () => {
  let component: ModificarOrganizacionComponent;
  let fixture: ComponentFixture<ModificarOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
