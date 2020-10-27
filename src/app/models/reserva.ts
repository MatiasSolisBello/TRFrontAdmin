export class Reserva{
    id_reserva: number;
    precio_total: number;
    descripcion: string;
    fecha_llegada: Date;
    fecha_salida: Date;
    cliente_rut: Object;
    depart_id_depart: Object;
    servicio_id_servicio: Object;
}