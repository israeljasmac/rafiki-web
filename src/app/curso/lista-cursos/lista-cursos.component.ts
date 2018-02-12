import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
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

export class ListaCursosComponent implements OnInit {

  domain: string = 'http://localhost:10010';
  curso: any;

  constructor(private httpClient: HttpClient) {
  }

  getCursos() {
    this.HttpClient.get(`${this.domain}/cursos`).subscribe(data => {
      console.log(data);
      this.curso = data;
    });
  }
  // deleteCurso(id){
  //   this.httpClient.delete(`${this.domain}/cursos/${id}`).subscribe(data => {
  //     //console.log(data);
  //     this.ngOnInit();
  //   });
  // }

  deleteCurso(id,i) {
    this.httpClient.delete(`${this.domain}/cursos/${id}`).subscribe(data => {
    });
    const respuesta = confirm('¿Estás seguro que deseas eliminarlo?');
    if (respuesta) {
      this.httpClient.delete(`${this.domain}/cursos/${id}`).subscribe(data => {
        this.curso.cursos.splice(i, 1)
      }, (err) => {
        console.log(err);
      }
      )
    }
  }

  ngOnInit() {
    this.getCursos();
  }

}
