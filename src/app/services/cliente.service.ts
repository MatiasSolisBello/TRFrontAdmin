import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Cliente} from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'cliente';
	httpOptions = {
		headers: new HttpHeaders({
      'Content-Type': 'application/json'
		})
  };
  
  constructor(private http: HttpClient){ }

  getListCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>
    (this.myAppUrl + this.myApiUrl+ '/listar');
  }

  deleteCliente(rut: number):Observable<Cliente>{
    return this.http.delete<Cliente>
    (this.myAppUrl + this.myApiUrl + '/eliminar/'+ rut);
  }

  createCliente(cli : Cliente): Observable<Cliente>{
    return this.http.post<Cliente>
    (this.myAppUrl + this.myApiUrl + '/guardar' , cli, this.httpOptions);
  }

  verCliente(rut: number): Observable<Cliente>{
    return this.http.get<Cliente>
    (this.myAppUrl + this.myApiUrl + '/listar/' + rut);
  }

  updateCliente(rut: number, cli: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>
    (this.myAppUrl + this.myApiUrl + '/actualizar/'+ rut, cli, this.httpOptions);
  }
}
