import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-agregar-editar-cliente',
  templateUrl: './agregar-editar-cliente.component.html',
  styleUrls: ['./agregar-editar-cliente.component.css']
})
export class AgregarEditarClienteComponent implements OnInit {
  cliente: FormGroup;
  rutCliente  = 0;
  accion = 'Agregar';
  cli:Cliente;
  constructor(private fb: FormBuilder, private route: 
    ActivatedRoute, private clienteService: ClienteService,
     private router: Router) { 
    this.cliente = this.fb.group({
      rut:['', Validators.required],
      nombre:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      password:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('rut') > 0){
      this.rutCliente = +this.route.snapshot.paramMap.get('rut');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarCliente(){
    if(this.accion === 'Agregar'){
      const cliente: Cliente = {
        rut: this.cliente.get('rut').value,
        nombre: this.cliente.get('nombre').value,
        correo: this.cliente.get('correo').value,
        telefono: this.cliente.get('telefono').value,
        password: this.cliente.get('password').value,
      };
      this.clienteService.createCliente(cliente).subscribe(data => {
        this.router.navigate(['/listacliente']);
      });
    }else{
      const cliente: Cliente = {
        rut: this.cliente.get('rut').value,
        nombre: this.cliente.get('nombre').value,
        correo: this.cliente.get('correo').value,
        telefono: this.cliente.get('telefono').value,
        password: this.cliente.get('password').value,
      };
      this.clienteService.updateCliente(cliente).subscribe(data => {
        this.router.navigate(['/listacliente']);
      })
    }
    console.log(this.cliente);
  }

  esEditar(){
    if(this.rutCliente > 0){
      this.accion = 'Editar';
      this.clienteService.verCliente(this.rutCliente).subscribe(data => {
        this.cli = data;
        this.cliente.patchValue({
          rut: data.rut,
          nombre: data.nombre,
          correo: data.correo,
          telefono: data.telefono,
          password: data.password
        });
      });

      
    }
  }

}



