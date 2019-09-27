import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrganizacionService {

  domain: string = "http://localhost:10010/organizaciones";

  constructor(private http: HttpClient) { }

  getOrganizaciones()  {
    return this.http.get(`${this.domain}`)
  }

  getOrganizacion(id: String) {
    const url = `${this.domain}/${id}`;
    return this.http.get(url)
  }

  postOrganizacion(organizacion: Object) {
    return this.http.post(`${this.domain}`, organizacion)
  }

  updateOrganizacion(organizacion: Object, id: String) {
    return this.http.put(`${this.domain}/${id}`, organizacion, httpOptions)
  }

  deleteOrganizacion(id: String) {
    return this.http.delete(`${this.domain}/${id}`)
  }
}
