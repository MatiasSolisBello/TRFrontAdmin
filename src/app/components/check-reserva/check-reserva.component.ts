import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-check-reserva',
  templateUrl: './check-reserva.component.html'
})
export class CheckReservaComponent implements OnInit {
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
