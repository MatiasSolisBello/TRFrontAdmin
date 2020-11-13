import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from '../models/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'checkout';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListCheckout(): Observable<Checkout[]>{
    return this.http.get<Checkout[]>
    (this.myAppUrl + this.myApiUrl+'/listar' );
  }

  deleteCheckout(id: number):Observable<Checkout>{
    return this.http.delete<Checkout>
    (this.myAppUrl + this.myApiUrl+ '/eliminar/' + id);
  }
}
