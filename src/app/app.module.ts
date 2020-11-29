import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/include/navbar/navbar.component';
import { LoginComponent } from './components/include/login/login.component';
import { PrincipalComponent } from './components/include/principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarServicioComponent } from './components/servicio/listar-servicio/listar-servicio.component';
import { ListarDepartComponent } from './components/depart/listar-depart/listar-depart.component';
import { ListarReservaComponent } from './components/reserva/listar-reserva/listar-reserva.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';
import { Navbar2Component } from './components/include/navbar/navbar2.component';
import { Principal2Component } from './components/include/principal/principal2.component';
import { CheckReservaComponent } from './components/check-reserva/check-reserva.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddEditUsuarioComponent } from './components/usuario/add-edit-usuario/add-edit-usuario.component';
import { AddEditDepartComponent } from './components/depart/add-edit-depart/add-edit-depart.component';
import { AddEditServicioComponent } from './components/servicio/add-edit-servicio/add-edit-servicio.component';
import { AddEditCheckinComponent } from './components/checkin/add-edit-checkin/add-edit-checkin.component';
import { AddEditCheckoutComponent } from './components/checkout/add-edit-checkout/add-edit-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PrincipalComponent,
    ListarServicioComponent,
    ListarDepartComponent,
    ListarReservaComponent,
    ListarUsuarioComponent,
    Principal2Component,
    Navbar2Component,
    CheckReservaComponent,
    CheckinComponent,
    CheckoutComponent,
    AddEditUsuarioComponent,
    AddEditDepartComponent,
    AddEditServicioComponent,
    AddEditCheckinComponent,
    AddEditCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
