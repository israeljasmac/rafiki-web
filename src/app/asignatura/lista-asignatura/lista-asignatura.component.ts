import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-lista-asignatura',
  templateUrl: './lista-asignatura.component.html',
  styleUrls: ['./lista-asignatura.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class ListaAsignaturaComponent implements OnInit {

  rForm: FormGroup;
  domain: string = 'http://localhost:10010';
  asignaturas: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.rForm = formBuilder.group({
      'nombre': [null, Validators.required],
      'horasPedagogicasConJecAnual': [null, Validators.required],
      'horasPedagogicasSinJecAnual': [null, Validators.required],
      'horasPedagogicasConJecSemanal': [null, Validators.required],
      'horasPedagogicasSinJecSemanal': [null, Validators.required]
    });
  }

  getAsignaturas() {
    this.httpClient.get(`${this.domain}/asignaturas`).subscribe(data => {
      // console.log(data);
      this.asignaturas = data;
      //console.log(this.asignaturas);
    });
  }

  deleteAsignatura(id,i) {
    this.httpClient.delete(`${this.domain}/asignaturas/${id}`).subscribe(data => {
    });
    const respuesta = confirm('¿Estás seguro que deseas eliminarlo?');
    if (respuesta) {
      this.httpClient.delete(`${this.domain}/asignaturas/${id}`).subscribe(data => {
        this.asignaturas.Asignaturas.splice(i, 1)
      }, (err) => {
        console.log(err);
      }
      )
    }
  }

  ngOnInit() {
    this.getAsignaturas();
  }

}
