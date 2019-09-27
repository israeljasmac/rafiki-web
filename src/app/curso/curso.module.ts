import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ModificarCursoComponent } from './modificar-curso/modificar-curso.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    DetalleCursoComponent,
  ],
  exports:[
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    DetalleCursoComponent,
  ]
})
export class CursoModule { }
