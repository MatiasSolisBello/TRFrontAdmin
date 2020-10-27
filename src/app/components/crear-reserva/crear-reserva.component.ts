import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  reserva: FormGroup;
  id  = 0;
  accion = 'Agregar';
  res:Reserva;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private reservaService: ReservaService, private router: Router) {
    this.reserva = this.fb.group({
      id_reserva:['', Validators.required],
      precio_total:['', Validators.required],
      descripcion:['', Validators.required],
      fecha_llegada:['', Validators.required],
      fecha_salida:['', Validators.required],
      cliente_rut:['', Validators.required],
      depart_id_depart:['', Validators.required],
      servicio_id_servicio:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('id_reserva') > 0){
      this.id = +this.route.snapshot.paramMap.get('id_reserva');
    }
  }
  ngOnInit(): void {
    this.esEditar();
  }

  guardarReserva(){
    if(this.accion === 'Agregar'){
      const reserva: Reserva = {
        id_reserva: this.reserva.get('id_reserva').value,
        precio_total: this.reserva.get('precio_total').value,
        descripcion: this.reserva.get('descripcion').value,
        fecha_llegada: this.reserva.get('fecha_llegada').value,
        fecha_salida: this.reserva.get('fecha_salida').value,
        cliente_rut: this.reserva.get('cliente_rut').value,
        depart_id_depart: this.reserva.get('depart_id_depart').value,
        servicio_id_servicio: this.reserva.get('servicio_id_servicio').value,
      };
      this.reservaService.createReserva(reserva).subscribe(data => {
        this.router.navigate(['/listareserva']);
      });
    }else{
      const reserva: Reserva = {
        id_reserva: this.reserva.get('id_reserva').value,
        precio_total: this.reserva.get('precio_total').value,
        descripcion: this.reserva.get('descripcion').value,
        fecha_llegada: this.reserva.get('fecha_llegada').value,
        fecha_salida: this.reserva.get('fecha_salida').value,
        cliente_rut: this.reserva.get('cliente_rut').value,
        depart_id_depart: this.reserva.get('depart_id_depart').value,
        servicio_id_servicio: this.reserva.get('servicio_id_servicio').value,
      };
      this.reservaService.updateReserva(reserva).subscribe(data => {
        this.router.navigate(['/listareserva']);
      })
    }
    console.log(this.reserva);
  }

  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.reservaService.verReserva(this.id).subscribe(data => {
        this.res = data;
        this.reserva.patchValue({
          id_reserva: data.id_reserva,
          precio_total: data.precio_total,
          descripcion: data.descripcion,
          fecha_llegada: data.fecha_llegada,
          fecha_salida: data.fecha_salida,
          cliente_rut: data.cliente_rut,
          depart_id_depart: data.depart_id_depart,
          servicio_id_servicio: data.servicio_id_servicio,

        });
      });

      
    }
  }

}
