import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/count';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getCountUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>
    (this.myAppUrl + this.myApiUrl + '/users');
  }
}
