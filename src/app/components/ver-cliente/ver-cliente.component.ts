import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {
  loading = false;
  cliente: Cliente;
  rutCliente: number;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) { 
    this.rutCliente = +this.route.snapshot.paramMap.get('rut');
  }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(){
    this.clienteService.verCliente(this.rutCliente).subscribe(data => {
      this.cliente = data;
    })
  }
}
