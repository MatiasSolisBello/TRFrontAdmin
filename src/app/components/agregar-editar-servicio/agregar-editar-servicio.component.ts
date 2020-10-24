import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-agregar-editar-servicio',
  templateUrl: './agregar-editar-servicio.component.html',
  styleUrls: ['./agregar-editar-servicio.component.css']
})
export class AgregarEditarServicioComponent implements OnInit {
  servicio: FormGroup;
  id  = 0;
  accion = 'Agregar';
  ser:Servicio;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private servicioService: ServicioService, private router: Router) { 
    this.servicio = this.fb.group({
      id_servicio:['', Validators.required],
      servicio:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('id_servicio') > 0){
      this.id = +this.route.snapshot.paramMap.get('id_servicio');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarServicio(){
    if(this.accion === 'Agregar'){
      const Servicio: Servicio = {
        id_servicio: this.servicio.get('id_servicio').value,
        nombre: this.servicio.get('servicio').value,
        descripcion: this.servicio.get('descripcion').value,
        precio: this.servicio.get('precio').value,
      };
      this.servicioService.createServicio(Servicio).subscribe(data => {
        this.router.navigate(['/listaservicio']);
      });
    }else{
      const servicio: Servicio = {
        id_servicio: this.servicio.get('id_servicio').value,
        nombre: this.servicio.get('servicio').value,
        descripcion: this.servicio.get('descripcion').value,
        precio: this.servicio.get('precio').value,
      };
      this.servicioService.updateServicio(servicio).subscribe(data => {
        this.router.navigate(['/listaservicio']);
      })
    }
    console.log(this.servicio);
  }

  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.servicioService.verServicio(this.id).subscribe(data => {
        this.ser = data;
        this.servicio.patchValue({
          id_servicio: data.id_servicio,
          servicio: data.nombre,
          descripcion: data.descripcion,
          precio: data.precio
        });
      });

      
    }
  }

}  
