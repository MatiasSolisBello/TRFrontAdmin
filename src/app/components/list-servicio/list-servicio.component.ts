import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-list-servicio',
  templateUrl: './list-servicio.component.html',
  styleUrls: ['./list-servicio.component.css']
})

export class ListServicioComponent implements OnInit {
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
