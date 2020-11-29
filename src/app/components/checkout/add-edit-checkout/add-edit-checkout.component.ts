import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkout } from 'src/app/models/Checkout';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-add-edit-checkout',
  templateUrl: './add-edit-checkout.component.html'
})
export class AddEditCheckoutComponent implements OnInit {
  checkout: FormGroup;
  id  = 0;
  accion = 'Agregar';
  out:Checkout;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private checkoutService: CheckoutService, 
    private router: Router) { 
    this.checkout = this.fb.group({
      id:['', Validators.required],
      estado:['', Validators.required],
      multa:['', Validators.required],
      problemas:['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.id = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }

  guardarCheckout(){
    if(this.accion === 'Agregar'){
      const Checkout: Checkout = {
        id: this.checkout.get('id').value,
        estado: this.checkout.get('estado').value,
        multa: this.checkout.get('multa').value,
        problemas: this.checkout.get('problemas').value,
        reserva_id: this.checkout.get('reserva_id').value,
      };
      this.checkoutService.createCheckout(Checkout).subscribe(data => {
        this.router.navigate(['/lista-checkout']);
      });
    }else{
      const checkout: Checkout = {
        id: this.checkout.get('id').value,
        estado: this.checkout.get('estado').value,
        multa: this.checkout.get('multa').value,
        problemas: this.checkout.get('problemas').value,
        reserva_id: this.checkout.get('reserva_id').value,
      };
    }
    console.log(this.checkout);
  }

  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.checkoutService.verCheckout(this.id).subscribe(data => {
        this.out = data;
        this.checkout.patchValue({
          id: data.id,
          estado: data.estado,
          multa: data.multa,
          problemas: data.problemas,
          reserva_id: data.reserva_id,
        });
      });

      
    }
  }
}
