import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/user/';
	httpOptions = {
		headers: new HttpHeaders({
      'Content-Type': 'application/json'
		})
  };
  
  constructor(private http: HttpClient){ }

  getListUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>
    (this.myAppUrl + this.myApiUrl);
  }

  deleteUsuario(id: number):Observable<Usuario>{
    return this.http.delete<Usuario>
    (this.myAppUrl + this.myApiUrl + id);
  }

  createUsuario(user : Usuario): Observable<Usuario>{
    return this.http.post<Usuario>
    (this.myAppUrl + this.myApiUrl, user, this.httpOptions);
  }

  verUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>
    (this.myAppUrl + this.myApiUrl + id);
  }

  updateUsuario(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>
    (this.myAppUrl + this.myApiUrl, user, this.httpOptions);
  }
}
