import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Depart } from 'src/app/models/depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-ver-depart',
  templateUrl: './ver-depart.component.html',
  styleUrls: ['./ver-depart.component.css']
})
export class VerDepartComponent implements OnInit {
  loading = false;
  depart: Depart;
  id: number;
  constructor(private departService: DepartService, private route: ActivatedRoute) { 
    this.id = +this.route.snapshot.paramMap.get('id_depart');
  }

  ngOnInit(): void {
    this.cargarDepart();
  }

  cargarDepart(){
    this.departService.verDepart(this.id).subscribe(data => {
      this.depart = data;
    })
  }

}
