import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class EvaluacionService {
  domain: string = "http://localhost:10010/evaluaciones";

  constructor(private http: HttpClient) { }


  /**
  * @name getEvaluaciones
  * @description Funcion que realiza una peticion /GET al servidor para obtener todas las evaluaciones existentes en la BD
  * @author Israel Ogas
  * @returns {Object} Object que contiene un Array de objetos de tipo {Evaluacion}
  */
  getEvaluaciones() {
    console.log('GET ' + this.http.get(`${this.domain}`))
    return this.http.get(`${this.domain}`)
  }

  /**
  * @name getEvaluacion
  * @description Funcion que realiza una peticion /GET al servidor para obtener una evaluacion por medio de una ID
  * @author Israel Ogas
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {Evaluacion}
  */
  getEvaluacion(id: String) {
    const url = `${this.domain}/${id}`;
    return this.http.get(url)
  }

  /**
  * @name postEvaluacion
  * @description Funcion que envia una peticion /POST al servidor para guardar una evaluacion en la BD
  * @author Israel Ogas
  * @param {Object} evaluacion Es el objeto que se va a guardar en la BD
  * @returns {Object} Object de tipo {Evaluacion}
  */
  postEvaluacion(evaluacion: Object) {
    return this.http.post(`${this.domain}`, evaluacion)
  }

  /**
  * @name updateOrganizacion
  * @description Funcion que envia una peticion /PUT al servidor para modificar y guardar una evaluacion en la BD
  * @author Israel Ogas
  * @param {Object} evaluacion Es el objeto que se va a guardar en la BD
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {Evaluacion}
  */
  updateOrganizacion(evaluacion: Object, id: String) {
    return this.http.put(`${this.domain}/${id}`, evaluacion, httpOptions)
  }

  /**
  * @name deleteEvaluacion
  * @description Funcion que envia una peticion /DELETE al servidor para eliminar una evaluacion en la BD
  * @author Israel Ogas
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {Evaluacion}
  */
  deleteEvaluacion(id: String) {
    return this.http.delete(`${this.domain}/${id}`)
  }

}
