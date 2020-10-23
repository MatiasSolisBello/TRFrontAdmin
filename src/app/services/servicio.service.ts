import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'servicio';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.myAppUrl + this.myApiUrl + '/listar');
  }

  deleteServicio(id_servicio: number):Observable<Servicio>{
    return this.http.delete<Servicio>
    (this.myAppUrl + this.myApiUrl + '/eliminar/'+ id_servicio);
  }

  createServicio(ser : Servicio): Observable<Servicio>{
    return this.http.post<Servicio>
    (this.myAppUrl + this.myApiUrl + '/guardar' , ser, this.httpOptions);
  }

  verServicio(id_servicio: number): Observable<Servicio>{
    return this.http.get<Servicio>
    (this.myAppUrl + this.myApiUrl + '/listar/' + id_servicio);
  }

  updateServicio(id_servicio: number, ser: Servicio): Observable<Servicio>{
    return this.http.put<Servicio>
    (this.myAppUrl + this.myApiUrl + '/actualizar/'+ id_servicio, ser, this.httpOptions);
  }
}
