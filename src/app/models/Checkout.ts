import {Reserva} from './reserva';

export class Checkout{
	id: number;
    estado: string;
    multa: number;
    problemas: string;
    reserva_id: Reserva;
}