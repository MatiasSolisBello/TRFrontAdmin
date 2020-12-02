import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkin } from '../models/Checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/reserva/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListCheckin(): Observable<Checkin[]>{
    return this.http.get<Checkin[]>
    (this.myAppUrl + this.myApiUrl);
  }

  createCheckin(idReserva: number, checkin : Checkin): Observable<Checkin>{
    return this.http.post<Checkin>
    (this.myAppUrl + this.myApiUrl +'/'+idReserva + '/checkin', checkin, this.httpOptions );
  }

  deleteCheckin(id: number):Observable<Checkin>{
    return this.http.delete<Checkin>
    (this.myAppUrl + this.myApiUrl+ id);
  }

  verCheckin(id: number): Observable<Checkin>{
    return this.http.get<Checkin>
    (this.myAppUrl + this.myApiUrl+ id);
  }

  updateCheckin(checkin: Checkin): Observable<Checkin>{
    return this.http.put<Checkin>
    (this.myAppUrl + this.myApiUrl, checkin, this.httpOptions);
  }
}
