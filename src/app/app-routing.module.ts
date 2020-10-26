import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente/agregar-editar-cliente.component';
import { AgregarEditarDepartComponent } from './components/agregar-editar-depart/agregar-editar-depart.component';
import { AgregarEditarServicioComponent } from './components/agregar-editar-servicio/agregar-editar-servicio.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { ListDepartComponent } from './components/list-depart/list-depart.component';
import { ListServicioComponent } from './components/list-servicio/list-servicio.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';
import { VerDepartComponent } from './components/ver-depart/ver-depart.component';

//ROUTING
const routes: Routes = [
  {path: 'agregar-cliente', component: AgregarEditarClienteComponent},
  {path: 'agregar-servicio', component: AgregarEditarServicioComponent},
  {path: 'agregar-depart', component: AgregarEditarDepartComponent},

  {path: 'editar-cliente/:rut', component: AgregarEditarClienteComponent},
  {path: 'editar-servicio/:id_servicio', component: AgregarEditarServicioComponent},
  {path: 'editar-depart/:id_depart', component: AgregarEditarDepartComponent},

  {path: 'ver-cliente/:rut', component: VerClienteComponent},
  {path: 'ver-depart/:id_depart', component: VerDepartComponent},

  {path: 'listacliente', component: ListClienteComponent},
  {path: 'listadepart', component: ListDepartComponent},
  {path: 'listaservicio', component: ListServicioComponent},
  {path: 'listareserva', component: ListarReservaComponent},

  {path: 'principal', component: PrincipalComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
