import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/Servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html'
})
export class ListarServicioComponent implements OnInit {
  listServicio: Servicio[];
  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.cargarServicio();
  }

  cargarServicio(){
    this.servicioService.getListServicio().subscribe(data => {
      this.listServicio = data;
    });
  }

  delete(id_servicio: number){
    this.servicioService.deleteServicio(id_servicio).subscribe(data => {
      this.cargarServicio();

    })
  }

}
