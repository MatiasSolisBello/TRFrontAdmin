import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depart } from '../models/depart';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'depart';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListDepart(): Observable<Depart[]>{
    return this.http.get<Depart[]>
    (this.myAppUrl + this.myApiUrl+'/listar' );
  }

  deleteDepart(id_depart: number):Observable<Depart>{
    return this.http.delete<Depart>
    (this.myAppUrl + this.myApiUrl+ '/eliminar/' + id_depart);
  }

  createDepart(dep : Depart): Observable<Depart>{
    return this.http.post<Depart>
    (this.myAppUrl + this.myApiUrl+ '/guardar', dep, this.httpOptions );
  }

  verDepart(id_depart: number): Observable<Depart>{
    return this.http.get<Depart>
    (this.myAppUrl + this.myApiUrl + '/listar/'+ id_depart);
  }

  updateDepart(dep: Depart): Observable<Depart>{
    return this.http.put<Depart>
    (this.myAppUrl + this.myApiUrl + '/actualizar', dep, this.httpOptions);
  }
}
