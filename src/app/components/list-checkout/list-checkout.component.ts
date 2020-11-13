import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/checkout';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-list-checkout',
  templateUrl: './list-checkout.component.html'
})
export class ListCheckoutComponent implements OnInit {
  listCheckout: Checkout[];
  constructor(private checkinService: CheckoutService) { }

  ngOnInit(): void {
    this.cargarCheckout();
  }

  cargarCheckout(){
    this.checkinService.getListCheckout().subscribe(data => {
      this.listCheckout = data;
    });
  }

  delete(id: number){
    this.checkinService.deleteCheckout(id).subscribe(data => {
      this.cargarCheckout();
    })
  }
}
