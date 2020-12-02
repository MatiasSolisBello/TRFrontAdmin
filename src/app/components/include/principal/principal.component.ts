import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent implements OnInit {
  countUsers : Usuario[];
  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.contarUsuarios();
  }

  contarUsuarios(){
    this.principalService.getCountUsers().subscribe(data => {
      this.countUsers = data;
    });
  }


}
