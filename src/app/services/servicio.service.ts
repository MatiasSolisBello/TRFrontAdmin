import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/servicio/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>
    (this.myAppUrl + this.myApiUrl);
  }

  deleteServicio(id: number):Observable<Servicio>{
    return this.http.delete<Servicio>
    (this.myAppUrl + this.myApiUrl + id);
  }

  createServicio(ser : Servicio): Observable<Servicio>{
    return this.http.post<Servicio>
    (this.myAppUrl + this.myApiUrl, ser, this.httpOptions);
  }

  verServicio(id: number): Observable<Servicio>{
    return this.http.get<Servicio>
    (this.myAppUrl + this.myApiUrl+ id);
  }

  updateServicio(ser: Servicio): Observable<Servicio>{
    return this.http.put<Servicio>
    (this.myAppUrl + this.myApiUrl, ser, this.httpOptions);
  }
  

}
