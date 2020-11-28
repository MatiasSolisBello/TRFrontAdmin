import {Usuario} from './Usuario';
import {Depart} from './depart';
import {Servicio} from './servicio';

export class Reserva{
    id: number;
    precio: number;
    descripcion: string;
    llegada: Date;
    salida: Date;
    pago: string;
    usuario_id: Usuario;
    depart_id: Depart;
    servicio_id: Servicio;
}