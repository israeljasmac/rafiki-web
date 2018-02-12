import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from '../services/evaluacion.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-evaluaciones',
  templateUrl: './lista-evaluaciones.component.html',
  styleUrls: ['./lista-evaluaciones.component.css'],
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

export class ListaEvaluacionesComponent implements OnInit {
  evaluaciones: any;

  constructor(
    private evaluacionService: EvaluacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEvaluaciones();
  }

  getEvaluaciones(): void {
    this.evaluacionService.getEvaluaciones()
      .subscribe(res => {
        this.evaluaciones = res
      }
      )
  }

  deleteEvaluacion(id, i): void {
    const respuesta = confirm('¿ Estás seguro que deseas eliminarlo?');
    if (respuesta) {
      this.evaluacionService.deleteEvaluacion(id)
        .subscribe(res => {
          this.evaluaciones.evaluaciones.splice(i, 1)
        }, (err) => {
          console.log(err);
        }
        )
    }
  }
}
