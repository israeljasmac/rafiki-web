import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

import { RouterModule, Routes } from '@angular/router';

import { fakeBackendProvider } from './_helpers/index';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule 
  ],
  declarations: [
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditarUsuarioComponent
  ],
  providers:[
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
  exports:[
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditarUsuarioComponent
  ]
})
export class AuthenticationAuthorizationModule { }
