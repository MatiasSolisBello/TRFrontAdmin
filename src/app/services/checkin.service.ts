import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkin } from '../models/checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'api';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListCheckin(): Observable<Checkin[]>{
    return this.http.get<Checkin[]>
    (this.myAppUrl + this.myApiUrl+'/listar' );
  }

  deleteCheckin(id: number):Observable<Checkin>{
    return this.http.delete<Checkin>
    (this.myAppUrl + this.myApiUrl+ '/eliminar/' + id);
  }
}
