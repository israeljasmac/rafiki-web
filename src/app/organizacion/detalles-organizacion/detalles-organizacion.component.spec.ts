import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOrganizacionComponent } from './detalles-organizacion.component';

describe('DetallesOrganizacionComponent', () => {
  let component: DetallesOrganizacionComponent;
  let fixture: ComponentFixture<DetallesOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
