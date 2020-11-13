import {Reserva} from './reserva';

export class Checkout{
	id: number;
    estado: string;
    multa: number;
    problemas: string;
    id_reserva: Reserva;
}