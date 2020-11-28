import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckReservaComponent } from './components/check-reserva/check-reserva.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddEditDepartComponent } from './components/depart/add-edit-depart/add-edit-depart.component';
import { ListarDepartComponent } from './components/depart/listar-depart/listar-depart.component';
import { LoginComponent } from './components/include/login/login.component';
import { PrincipalComponent } from './components/include/principal/principal.component';
import { Principal2Component } from './components/include/principal/principal2.component';
import { ListarReservaComponent } from './components/reserva/listar-reserva/listar-reserva.component';
import { AddEditServicioComponent } from './components/servicio/add-edit-servicio/add-edit-servicio.component';
import { ListarServicioComponent } from './components/servicio/listar-servicio/listar-servicio.component';
import { AddEditUsuarioComponent } from './components/usuario/add-edit-usuario/add-edit-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {path: 'lista-usuarios', component: ListarUsuarioComponent},
  {path: 'lista-depart', component: ListarDepartComponent},
  {path: 'lista-reserva', component: ListarReservaComponent},
  {path: 'lista-servicio', component: ListarServicioComponent},
  {path: 'lista-checkin', component: CheckinComponent},
  {path: 'lista-checkout', component: CheckoutComponent},
  {path: 'lista-check-reserva', component: CheckReservaComponent},

  {path: 'agregar-usuario', component: AddEditUsuarioComponent},
  {path: 'agregar-depart', component: AddEditDepartComponent},
  {path: 'agregar-servicio', component: AddEditServicioComponent},
  //{path: 'agregar-checkin', component: AddEditCheckinComponent},

  {path: 'editar-usuario/:id', component: AddEditUsuarioComponent},
  {path: 'editar-depart/:id', component: AddEditDepartComponent},
  {path: 'editar-servicio/:id', component: AddEditServicioComponent},
  //{path: 'editar-checkin/:id', component: AddEditCheckinComponent},

  {path: 'principal', component: PrincipalComponent},
  {path: 'principal2', component: Principal2Component},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
