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
  id  = 0;
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
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.id = +this.route.snapshot.paramMap.get('id');
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
        reserva_id: this.checkin.get('reserva_id').value,
      };
      this.checkinService.createCheckin(Checkin).subscribe(data => {
        this.router.navigate(['/lista-checkin']);
      });
    }else{
      const checkin: Checkin = {
        id: this.checkin.get('id').value,
        condiciones: this.checkin.get('condiciones').value,
        reserva_id: this.checkin.get('reserva_id').value,
      };
    }
    console.log(this.checkin);
  }

  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.checkinService.verCheckin(this.id).subscribe(data => {
        this.in = data;
        this.checkin.patchValue({
          id: data.id,
          condiciones: data.condiciones,
          reserva_id: data.reserva_id,
        });
      });

      
    }
  }

}
