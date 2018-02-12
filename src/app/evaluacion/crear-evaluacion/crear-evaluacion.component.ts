import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-crear-evaluacion',
  templateUrl: './crear-evaluacion.component.html',
  styleUrls: ['./crear-evaluacion.component.css']
})
export class CrearEvaluacionComponent implements OnInit {
  rForm: FormGroup;
  mensaje: String = '';
  nombreProfesor: String = '';
  evaluacion: any;

  nivelesDeAprendizaje = ['Recordar', 'Comprender', 'Aplicar', 'Analizar', 'Evaluar', 'Crear'];
  tiposDeEjecucion = ['Al azar', 'Orden numeral', 'Mayor dificultad', 'Menor dificultad'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private evaluacionService: EvaluacionService
  ) {
    this.rForm = fb.group({
      'profesorAutor': [null, Validators.required],
      //'creado_fecha': [null, Validators.required],
      'nivelAprendizaje': [null, Validators.required],
      'tipoEjecucion': [null, Validators.required],
      'asignatura': [null, Validators.required],
      'detalles': [null, Validators.required],
      'retroalimentacion': this.fb.array([])
    })
  }

  ngOnInit() { }

  crearEvaluacion(evaluacion) {
    this.mensaje = 'Se ha añadido correctamente la evaluacion de <' + evaluacion.nombreProfesor + '>a la Base de Datos. Se le redireccionará a la pagina de inicio';

    this.evaluacionService.postEvaluacion(evaluacion)
      .subscribe(res => {
        this.evaluacion = res;
        setTimeout(() => {
          this.router.navigate(['/evaluaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      });
  }

  removeRetroalimentacion(i: number) {
    const control = <FormArray>this.rForm.controls['retroalimentacion'];
    control.removeAt(i)
  }


  onAddRetro() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('retroalimentacion')).push(control);
  }
}
