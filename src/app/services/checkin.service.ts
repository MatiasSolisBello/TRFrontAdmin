import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkin } from '../models/Checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/checkin/';
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

  deleteCheckin(id: number):Observable<Checkin>{
    return this.http.delete<Checkin>
    (this.myAppUrl + this.myApiUrl+ id);
  }
}
