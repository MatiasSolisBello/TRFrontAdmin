import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
})

export class ListarReservaComponent implements OnInit {
  listReserva: Reserva[];
  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.cargarReserva();
  }

  cargarReserva(){
    this.reservaService.getListReserva().subscribe(data => {
      this.listReserva = data;
    });
  }

  delete(id_reserva: number){
    this.reservaService.deleteReserva(id_reserva).subscribe(data => {
      this.cargarReserva();

    })
  }

}
