import { Direccion } from './Direccion';
import { FechaPostulacion } from './FechaPostulacion';

export class Organizacion {
    _id?: String;
    rbd: Number;
    nombre: String;
    descripcion: String;
    reconocimientoOficial: String;
    dependencia: String;
    sostenedor: String;
    orientacionReligiosa: String;
    correo: String;
    telefono: String;
    web: String;
    director: String;
    mensualidad: Number;
    numVacantes: Number;
    puntajeSimce: Number;
    promAlumnosCurso: Number;
    totalAlumnosMatriculados: Number;
    direccion: Direccion;
    fechaPostulacion: FechaPostulacion;
    n?: Number;
}