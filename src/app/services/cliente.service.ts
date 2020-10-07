import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Cliente} from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl = 'http://localhost:xxxx/';
	myApiUrl = 'api/cliente/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
  };
  
  constructor(private http: HttpClient){

  }

  getListCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteCliente(rut: number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.myAppUrl + this.myApiUrl + rut);
  }

  createCliente(cli : Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrl, cli, this.httpOptions);
  }

  verCliente(rut: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.myAppUrl + this.myApiUrl + rut);
  }

  updateCliente(rut: number, cli: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.myAppUrl + this.myApiUrl, cli, this.httpOptions);
  }
}
