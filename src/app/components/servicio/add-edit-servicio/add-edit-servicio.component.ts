import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-add-edit-servicio',
  templateUrl: './add-edit-servicio.component.html'
})
export class AddEditServicioComponent implements OnInit {
  servicio: FormGroup;
  id  = 0;
  accion = 'Agregar';
  ser:Servicio;
  constructor(private fb: FormBuilder, 
  private route: ActivatedRoute, 
  private servicioService: ServicioService, 
  private router: Router) { 
    this.servicio = this.fb.group({
      id:['', Validators.required],
      servicio:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.id = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarServicio(){
    if(this.accion === 'Agregar'){
      const Servicio: Servicio = {
        id: this.servicio.get('id').value,
        nombre: this.servicio.get('servicio').value,
        descripcion: this.servicio.get('descripcion').value,
        precio: this.servicio.get('precio').value,
      };
      this.servicioService.createServicio(Servicio).subscribe(data => {
        this.router.navigate(['/lista-servicio']);
      });
    }else{
      const servicio: Servicio = {
        id: this.servicio.get('id').value,
        nombre: this.servicio.get('servicio').value,
        descripcion: this.servicio.get('descripcion').value,
        precio: this.servicio.get('precio').value,
      };
      this.servicioService.updateServicio(servicio).subscribe(data => {
        this.router.navigate(['/lista-servicio']);
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
          id: data.id,
          servicio: data.nombre,
          descripcion: data.descripcion,
          precio: data.precio
        });
      });

      
    }
  }
}
