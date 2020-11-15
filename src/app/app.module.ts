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
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { Principal2Component } from './components/principal2/principal2.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { ListCheckinComponent } from './components/list-checkin/list-checkin.component';
import { ListCheckoutComponent } from './components/list-checkout/list-checkout.component';
import { AgregarEditarCheckinComponent } from './components/agregar-editar-checkin/agregar-editar-checkin.component';
import { AgregarEditarCheckoutComponent } from './components/agregar-editar-checkout/agregar-editar-checkout.component';
import { CheckForReservaComponent } from './components/check-for-reserva/check-for-reserva.component';

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
    ListarReservaComponent,
    Principal2Component,
    Navbar2Component,
    ListCheckinComponent,
    ListCheckoutComponent,
    AgregarEditarCheckinComponent,
    AgregarEditarCheckoutComponent,
    CheckForReservaComponent,
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
