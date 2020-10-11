import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Depart } from 'src/app/models/depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-agregar-editar-depart',
  templateUrl: './agregar-editar-depart.component.html',
  styleUrls: ['./agregar-editar-depart.component.css']
})
export class AgregarEditarDepartComponent implements OnInit {
  depart: FormGroup;
  id  = 0;
  accion = 'Agregar';
  dep:Depart;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private departService: DepartService, private router: Router) { 
    this.depart = this.fb.group({
      id_depart:['', Validators.required],
      precio:['', Validators.required],
      estado:['', Validators.required],
      ciudad:['', Validators.required],
      descripcion:['', Validators.required],
      foto:['', Validators.required], 
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
        id_depart: this.depart.get('id_depart').value,
        precio: this.depart.get('precio').value,
        estado: this.depart.get('estado').value,
        ciudad: this.depart.get('ciudad').value,
        descripcion: this.depart.get('descripcion').value,
        foto: this.depart.get('foto').value,

      };
      this.departService.createDepart(Depart).subscribe(data => {
        this.router.navigate(['/listadepart']);
      });
    }else{
      const Depart: Depart = {
        id_depart: this.depart.get('id_depart').value,
        precio: this.depart.get('precio').value,
        estado: this.depart.get('estado').value,
        ciudad: this.depart.get('ciudad').value,
        descripcion: this.depart.get('descripcion').value,
        foto: this.depart.get('foto').value,
      };
      this.departService.updateDepart(this.id, Depart).subscribe(data => {
        this.router.navigate(['/listadepart']);
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
          id_depart: data.id_depart,
          precio: data.precio,
          estado: data.estado,
          ciudad: data.ciudad,
          descripcion: data.descripcion,
          foto: data.foto
        });
      });

      
    }
  }
}

