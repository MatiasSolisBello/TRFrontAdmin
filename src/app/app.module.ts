import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente/agregar-editar-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListDepartComponent } from './components/list-depart/list-depart.component';
import { ListServicioComponent } from './components/list-servicio/list-servicio.component';
import { AgregarEditarServicioComponent } from './components/agregar-editar-servicio/agregar-editar-servicio.component';
import { AgregarEditarDepartComponent } from './components/agregar-editar-depart/agregar-editar-depart.component';
import { VerDepartComponent } from './components/ver-depart/ver-depart.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarClienteComponent,
    ListClienteComponent,
    VerClienteComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    ListDepartComponent,
    ListServicioComponent,
    AgregarEditarServicioComponent,
    AgregarEditarDepartComponent,
    VerDepartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
