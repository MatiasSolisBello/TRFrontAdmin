import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkin } from 'src/app/models/Checkin';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-add-edit-checkin',
  templateUrl: './add-edit-checkin.component.html'
})
export class AddEditCheckinComponent implements OnInit {
  checkin: FormGroup;
  idReserva  = 0;
  accion = 'Agregar';
  in:Checkin;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private checkinService: CheckinService, 
    private router: Router) { 
    this.checkin = this.fb.group({
      id:['', Validators.required],
      condiciones:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('idReserva') > 0){
      this.idReserva = +this.route.snapshot.paramMap.get('idReserva');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }

  guardarCheckin(){
    if(this.accion === 'Agregar'){
      const Checkin: Checkin = {
        id: this.checkin.get('id').value,
        condiciones: this.checkin.get('condiciones').value,

      };
      this.checkinService.createCheckin(this.idReserva, Checkin).subscribe(data => {
        this.router.navigate(['/lista-checkin']);
      });
    }else{
      const checkin: Checkin = {
        id: this.checkin.get('id').value,
        condiciones: this.checkin.get('condiciones').value,
      };
    }
    console.log(this.checkin);
  }

  esEditar(){
    if(this.idReserva > 0){
      this.accion = 'Editar';
      this.checkinService.verCheckin(this.idReserva).subscribe(data => {
        this.in = data;
        this.checkin.patchValue({
          id: data.id,
          condiciones: data.condiciones,
        });
      });

      
    }
  }

}
