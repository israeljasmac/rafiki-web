import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-actividad',
  templateUrl: './modificar-actividad.component.html',
  styleUrls: ['./modificar-actividad.component.css']
})
export class ModificarActividadComponent implements OnInit {

  rForm: FormGroup;
  asignatura: String = '';
  tema: String = '';
  subTema: String = '';
  tipoPregunta: String = '';
  nivelDificultad: String = '';
  nivelAprendizaje: String = '';
  profesorAutor: String;
  anhoAcademico: Number;
  semestre: Number;
  puntajeTotal: Number;
  preguntaEnunciado: String = '';
  respuesta: String = '';

  domain: string = 'http://localhost:10010';
  actividad: any;
  id: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private HttpClient: HttpClient) {

    this.route.params.subscribe(res => {
      this.id = res.id;
    } )

    this.rForm = formBuilder.group({

      'asignatura': [Validators.required],
      'tema': [Validators.required],
      'subTema': [Validators.required],
      'tipoPregunta': [Validators.required],
      'nivelDificultad': [Validators.required],
      'nivelAprendizaje': [Validators.required],
      'profesorAutor': [Validators.required],
      'anhoAcademico': [Validators.required],
      'semestre': [Validators.required],
      'puntajeTotal': [Validators.required],
      'preguntaEnunciado': [Validators.required],
      'preguntaAlternativas': this.formBuilder.array([]),
      'respuesta': [Validators.required],
      'respuestaAlternativas': this.formBuilder.array([]),
      'respuestaVerdaderoFalso': [Validators.required],
      'retroalimentacion': this.formBuilder.array([])
    });

  }

  updateActividad(put) {
    console.log("PUT DE PRUEBA");
    console.log(put);
    this.HttpClient.put(`${this.domain}/actividades/${this.id}`, put).subscribe(data => {
    console.log(put);
    });
    // this.getCursoId();
  }

  getActividad() {

    this.HttpClient.get(`${this.domain}/actividades/${this.id}`).subscribe(data => {
      // console.log(data);
      this.actividad = data;
      console.log(this.actividad);
    });
  }

  onAddRetroalimentacion() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('retroalimentacion')).push(control);

  }

  removeRetroalimentacion(i: number) {
    const control = <FormArray>this.rForm.controls['retroalimentacion'];
    control.removeAt(i)
  }

  onAddAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('preguntaAlternativas')).push(control);

  }

  onAddRespuestaAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('respuestaAlternativas')).push(control);

  }

  ngOnInit() {
    this.getActividad();
  }

}

