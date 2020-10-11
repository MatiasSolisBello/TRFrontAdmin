import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})

export class ListClienteComponent implements OnInit {
  listCliente: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(){
    this.clienteService.getListCliente().subscribe(data => {
      this.listCliente = data;
    });
  }

  delete(rut: number){
    this.clienteService.deleteCliente(rut).subscribe(data => {
      this.cargarCliente();

    })
  }

}
