import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-detalles-evaluacion',
  templateUrl: './detalles-evaluacion.component.html',
  styleUrls: ['./detalles-evaluacion.component.css']
})
export class DetallesEvaluacionComponent implements OnInit {
  evaluacion: any;
  _id: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evaluacionService: EvaluacionService,
  ) {
    this.route.params.subscribe(res => {
      this._id = res.id;
    })
  }

  getEvaluacion(): void {
    this.evaluacionService.getEvaluacion(this._id)
      .subscribe(res => {
        this.evaluacion = res,
          console.log(res)
      }
      )
  }

  ngOnInit() {
    this.getEvaluacion();
  }

}
