import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrganizacionModule } from './organizacion/organizacion.module';
import { CursoModule } from './curso/curso.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './authentication-authorization/home/home.component';
import { AuthGuard } from './authentication-authorization/_guards/auth.guard';
import { LoginComponent } from './authentication-authorization/login/login.component';
import { RegisterComponent } from './authentication-authorization/register/register.component';
import { AlertService } from './authentication-authorization/_services/alert.service';
import { AuthenticationService } from './authentication-authorization/_services/authentication.service';
import { UserService } from './authentication-authorization/_services/user.service';
import { JwtInterceptor } from './authentication-authorization/_helpers/jwt.interceptor';
import { fakeBackendProvider } from './authentication-authorization/_helpers/fake-backend';
import { ListaAsignaturaComponent } from './asignatura/lista-asignatura/lista-asignatura.component';
import { DetallesAsignaturaComponent } from './asignatura/detalles-asignatura/detalles-asignatura.component';
import { ModificarAsignaturaComponent } from './asignatura/modificar-asignatura/modificar-asignatura.component';
import { CrearAsignaturaComponent } from './asignatura/crear-asignatura/crear-asignatura.component';
import { ListaObjetivoAprendizajeComponent } from './objetivo-aprendizaje/lista-objetivo-aprendizaje/lista-objetivo-aprendizaje.component';
import { DetalleObjetivoAprendizajeComponent } from './objetivo-aprendizaje/detalle-objetivo-aprendizaje/detalle-objetivo-aprendizaje.component';
import { CrearObjetivoAprendizajeComponent } from './objetivo-aprendizaje/crear-objetivo-aprendizaje/crear-objetivo-aprendizaje.component';
import { ModificarObjetivoAprendizajeComponent } from './objetivo-aprendizaje/modificar-objetivo-aprendizaje/modificar-objetivo-aprendizaje.component';
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { DetalleCursoComponent } from './curso/detalle-curso/detalle-curso.component';
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';
import { CrearCursoComponent } from './curso/crear-curso/crear-curso.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aprendizajes', component: ListaObjetivoAprendizajeComponent },
  { path: 'aprendizajes/crear', component: CrearObjetivoAprendizajeComponent },
  { path: 'aprendizajes/:id', component: DetalleObjetivoAprendizajeComponent },
  { path: 'aprendizajes/:id/editar', component: ModificarObjetivoAprendizajeComponent },
  // Curso
  { path: 'cursos', component: ListaCursosComponent },
  { path: 'cursos/crear', component: CrearCursoComponent },
  { path: 'cursos/:id', component: DetalleCursoComponent },
  // Orgnizacion
  { path: 'organizaciones', component: ListaOrganizacionesComponent },
  { path: 'organizaciones/:id', component: DetallesOrganizacionComponent },
  // Asignatura
  { path: 'asignaturas', component: ListaAsignaturaComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListaAsignaturaComponent,
    DetallesAsignaturaComponent,
    ModificarAsignaturaComponent,
    CrearAsignaturaComponent,
    ListaObjetivoAprendizajeComponent,
    DetalleObjetivoAprendizajeComponent,
    CrearObjetivoAprendizajeComponent,
    ModificarObjetivoAprendizajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    OrganizacionModule,
    CursoModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }