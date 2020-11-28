import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Depart } from 'src/app/models/depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-add-edit-depart',
  templateUrl: './add-edit-depart.component.html'
})
export class AddEditDepartComponent implements OnInit {
  depart: FormGroup;
  id  = 0;
  accion = 'Agregar';
  dep:Depart;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private departService: DepartService, 
    private router: Router) { 
    this.depart = this.fb.group({
      id:['', Validators.required],
      precio:['', Validators.required],
      estado:['', Validators.required],
      ciudad:['', Validators.required],
      descripcion:['', Validators.required],
      foto:[''], 
      mantenimiento: [''],
    });
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.id = +this.route.snapshot.paramMap.get('id');
    }
  }
  
  ngOnInit(): void {
    this.esEditar();
  }

  guardarDepart(){
    if(this.accion === 'Agregar'){
      const Depart: Depart = {
        id: this.depart.get('id').value,
        precio: this.depart.get('precio').value,
        estado: this.depart.get('estado').value,
        ciudad: this.depart.get('ciudad').value,
        descripcion: this.depart.get('descripcion').value,
        foto: this.depart.get('foto').value,
        mantenimiento: this.depart.get('mantenimiento').value,

      };
      this.departService.createDepart(Depart).subscribe(data => {
        this.router.navigate(['/lista-depart']);
      });
    }else{
      const depart: Depart = {
        id: this.depart.get('id').value,
        precio: this.depart.get('precio').value,
        estado: this.depart.get('estado').value,
        ciudad: this.depart.get('ciudad').value,
        descripcion: this.depart.get('descripcion').value,
        foto: this.depart.get('foto').value,
        mantenimiento: this.depart.get('mantenimiento').value,
      };
      this.departService.updateDepart(depart).subscribe(data => {
        this.router.navigate(['/lista-depart']);
      })
    }
    console.log(this.depart);
  }

  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.departService.verDepart(this.id).subscribe(data => {
        this.dep = data;
        this.depart.patchValue({
          id: data.id,
          precio: data.precio,
          estado: data.estado,
          ciudad: data.ciudad,
          descripcion: data.descripcion,
          foto: data.foto,
          mantenimiento: data.mantenimiento
        });
      });

      
    }
  }
}
