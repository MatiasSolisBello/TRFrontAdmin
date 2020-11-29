import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from '../models/Checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/checkout/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListCheckout(): Observable<Checkout[]>{
    return this.http.get<Checkout[]>
    (this.myAppUrl + this.myApiUrl);
  }

  createCheckout(checkout : Checkout): Observable<Checkout>{
    return this.http.post<Checkout>
    (this.myAppUrl + this.myApiUrl, checkout, this.httpOptions );
  }

  deleteCheckout(id: number):Observable<Checkout>{
    return this.http.delete<Checkout>
    (this.myAppUrl + this.myApiUrl + id);
  }

  verCheckout(id: number): Observable<Checkout>{
    return this.http.get<Checkout>
    (this.myAppUrl + this.myApiUrl+ id);
  }

  updateCheckout(checkout: Checkout): Observable<Checkout>{
    return this.http.put<Checkout>
    (this.myAppUrl + this.myApiUrl, checkout, this.httpOptions);
  }
}
