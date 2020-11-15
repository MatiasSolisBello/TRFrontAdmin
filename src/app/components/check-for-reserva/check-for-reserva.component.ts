import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-check-for-reserva',
  templateUrl: './check-for-reserva.component.html'
})
export class CheckForReservaComponent implements OnInit {
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

}
