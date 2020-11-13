import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/models/depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-list-depart',
  templateUrl: './list-depart.component.html'
})
export class ListDepartComponent implements OnInit {
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
