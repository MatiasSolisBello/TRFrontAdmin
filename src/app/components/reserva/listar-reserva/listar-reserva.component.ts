import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html'
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

  delete(id: number){
    this.reservaService.deleteReserva(id).subscribe(data => {
      this.cargarReserva();

    })
  }
}
