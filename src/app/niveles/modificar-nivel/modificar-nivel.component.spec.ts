import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNivelComponent } from './modificar-nivel.component';

describe('ModificarNivelComponent', () => {
  let component: ModificarNivelComponent;
  let fixture: ComponentFixture<ModificarNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
