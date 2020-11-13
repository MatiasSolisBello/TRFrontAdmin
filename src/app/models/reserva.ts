import {Cliente} from './cliente';
import {Depart} from './depart';
import {Servicio} from './servicio';

export class Reserva{
    id_reserva: number;
    precio_total: number;
    descripcion: string;
    fecha_llegada: Date;
    fecha_salida: Date;
    pago: string;
    rut: Cliente;
    id_depart: Depart;
    id_servicio: Servicio;
}