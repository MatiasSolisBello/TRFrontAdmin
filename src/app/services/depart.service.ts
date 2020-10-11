import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depart } from '../models/depart';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  myAppUrl = 'http://localhost:xxxx/';
	myApiUrl = 'api/Depart/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListDepart(): Observable<Depart[]>{
    return this.http.get<Depart[]>
    (this.myAppUrl + this.myApiUrl);
  }

  deleteDepart(id_depart: number):Observable<Depart>{
    return this.http.delete<Depart>
    (this.myAppUrl + this.myApiUrl + id_depart);
  }

  createDepart(dep : Depart): Observable<Depart>{
    return this.http.post<Depart>
    (this.myAppUrl + this.myApiUrl, dep, this.httpOptions);
  }

  verDepart(id_depart: number): Observable<Depart>{
    return this.http.get<Depart>(this.myAppUrl + this.myApiUrl + id_depart);
  }

  updateDepart(id_depart: number, dep: Depart): Observable<Depart>{
    return this.http.put<Depart>
    (this.myAppUrl + this.myApiUrl + id_depart, dep, this.httpOptions);
  }
}
