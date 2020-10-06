import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-cliente',
  templateUrl: './agregar-editar-cliente.component.html',
  styleUrls: ['./agregar-editar-cliente.component.css']
})
export class AgregarEditarClienteComponent implements OnInit {
  cliente: FormGroup;
  rutCliente  = 0;
  accion = 'Agregar'
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { 
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
    console.log(this.cliente);
  }

  esEditar(){
    if(this.rutCliente > 0){
      this.accion = 'Editar';
      this.cliente.patchValue({
        rut: 345678,
        nombre: 'German Acevedo',
        correo: 'ger@ujdb.com',
        telefono: '23456',
        password: 'dferg'
      })
    }
  }

}
