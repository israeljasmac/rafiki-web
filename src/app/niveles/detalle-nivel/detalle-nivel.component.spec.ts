import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNivelComponent } from './detalle-nivel.component';

describe('DetalleNivelComponent', () => {
  let component: DetalleNivelComponent;
  let fixture: ComponentFixture<DetalleNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
