import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html'
})
export class ListarUsuarioComponent implements OnInit {
  listUsuario: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.usuarioService.getListUsuario().subscribe(data => {
      this.listUsuario = data;
    });
  }

  delete(id: number){
    this.usuarioService.deleteUsuario(id).subscribe(data => {
      this.cargarUsuario();

    })
  }
}
