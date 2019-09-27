import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNivelesComponent } from './lista-niveles.component';

describe('ListaNivelesComponent', () => {
  let component: ListaNivelesComponent;
  let fixture: ComponentFixture<ListaNivelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNivelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
