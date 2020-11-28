import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-edit-usuario',
  templateUrl: './add-edit-usuario.component.html'
})
export class AddEditUsuarioComponent implements OnInit {
  usuario: FormGroup;
  IdUsuario  = 0;
  accion = 'Agregar';
  user:Usuario;
  constructor(private fb: FormBuilder, private route: 
    ActivatedRoute, private usuarioService: UsuarioService,
     private router: Router) { 
    this.usuario = this.fb.group({
      id:['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.required],
      telefono:['', Validators.required],
      password:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.IdUsuario = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarUsuario(){
    if(this.accion === 'Agregar'){
      const usuario: Usuario = {
        id: this.usuario.get('id').value,
        username: this.usuario.get('username').value,
        email: this.usuario.get('email').value,
        telefono: this.usuario.get('telefono').value,
        password: this.usuario.get('password').value,
      };
      this.usuarioService.createUsuario(usuario).subscribe(data => {
        this.router.navigate(['/lista-usuarios']);
      });
    }else{
      const usuario: Usuario = {
        id: this.usuario.get('id').value,
        username: this.usuario.get('username').value,
        email: this.usuario.get('email').value,
        telefono: this.usuario.get('telefono').value,
        password: this.usuario.get('password').value,
      };
      this.usuarioService.updateUsuario(usuario).subscribe(data => {
        this.router.navigate(['/lista-usuarios']);
      })
    }
    console.log(this.usuario);
  }

  esEditar(){
    if(this.IdUsuario > 0){
      this.accion = 'Editar';
      this.usuarioService.verUsuario(this.IdUsuario).subscribe(data => {
        this.user = data;
        this.usuario.patchValue({
          id: data.id,
          username: data.username,
          email: data.email,
          telefono: data.telefono,
          password: data.password
        });
      });

      
    }
  }
}
