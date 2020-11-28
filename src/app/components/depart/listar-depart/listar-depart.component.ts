import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/models/Depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-listar-depart',
  templateUrl: './listar-depart.component.html'
})
export class ListarDepartComponent implements OnInit {
  listDepart: Depart[];
  constructor(private departService: DepartService) { }

  ngOnInit(): void {
    this.cargarDepart();
  }
  cargarDepart(){
    this.departService.getListDepart().subscribe(data => {
      this.listDepart = data;
    });
  }

  delete(id_depart: number){
    this.departService.deleteDepart(id_depart).subscribe(data => {
      this.cargarDepart();

    })
  }
}
