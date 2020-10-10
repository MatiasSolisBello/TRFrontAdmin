import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente/agregar-editar-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';

//ROUTING
const routes: Routes = [
  {path: 'agregar-cliente', component: AgregarEditarClienteComponent},
  {path: 'editar-cliente/:rut', component: AgregarEditarClienteComponent},
  {path: 'ver-cliente/:rut', component: VerClienteComponent},

  {path: 'listacliente', component: ListClienteComponent},
    //{path: 'listadepart', component: ListDepartComponent},
  //{path: 'listaservicio', component: ListServicioComponent},

  {path: 'principal', component: PrincipalComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
