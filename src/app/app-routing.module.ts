import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component'; 
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component'; 
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component'; 
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component'; 

import { ListaEvaluacionesComponent } from './evaluacion/lista-evaluaciones/lista-evaluaciones.component';
import { CrearEvaluacionComponent } from './evaluacion/crear-evaluacion/crear-evaluacion.component';
import { DetallesEvaluacionComponent } from './evaluacion/detalles-evaluacion/detalles-evaluacion.component';
import { ModificarEvaluacionComponent } from './evaluacion/modificar-evaluacion/modificar-evaluacion.component';

const routes: Routes = [ 
  // Rutas organizaciones
  { 
    path: 'organizaciones', 
    component: ListaOrganizacionesComponent 
  }, 
  { 
    path: 'organizacion/:id', 
    component: DetallesOrganizacionComponent 
  }, 
  { 
    path: 'organizaciones/crear', 
    component: CrearOrganizacionComponent 
  }, 
  { 
    path: 'organizacion/:id/editar', 
    component: ModificarOrganizacionComponent 
  }, 
  // Rutas evaluaciones
  { 
    path: 'evaluaciones', 
    component: ListaEvaluacionesComponent 
  }, 
  { 
    path: 'evaluacion/:id', 
    component: DetallesEvaluacionComponent 
  }, 
  { 
    path: 'evaluaciones/crear', 
    component: CrearEvaluacionComponent 
  }, 
  { 
    path: 'evaluacion/:id/editar', 
    component: ModificarEvaluacionComponent 
  }, 
]; 
 
@NgModule({ 
  imports: [ 
    RouterModule.forRoot(routes) 
  ], 
  exports: [RouterModule], 
  declarations: [] 
}) 
export class AppRoutingModule { } 