import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente/agregar-editar-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';

//ROUTING
const routes: Routes = [
  {path: 'agregar', component: AgregarEditarClienteComponent},
  {path: 'editar/:rut', component: AgregarEditarClienteComponent},
  {path: 'ver/:rut', component: VerClienteComponent},
  {path: '', component: ListClienteComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
