import { Component, OnInit } from '@angular/core';
import { Checkin } from 'src/app/models/Checkin';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html'
})
export class CheckinComponent implements OnInit {
  listCheckin: Checkin[];
  constructor(private checkinService: CheckinService) { }


  ngOnInit(): void {
    this.cargarCheckin();
  }

  cargarCheckin(){
    this.checkinService.getListCheckin().subscribe(data => {
      this.listCheckin = data;
    });
  }

  delete(id: number){
    this.checkinService.deleteCheckin(id).subscribe(data => {
      this.cargarCheckin();
    })
  }
}
