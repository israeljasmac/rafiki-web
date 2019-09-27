import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  rForm: FormGroup;
  asignatura: String = '';
  tema: String = '';
  subTema: String = '';
  nivelDificultad: String = '';
  tipoPregunta: String = '';
  nivelAprendizaje: String = '';
  profesorAutor: String;
  anhoAcademico: Number;
  semestre: Number;
  puntajeTotal: Number;
  preguntaEnunciado: String = '';
  respuesta: String = '';
  //respuestaVerdaderoFalso: Boolean;

  domain: string = 'http://localhost:10010';
  actividad: any;

  constructor(  private formBuilder: FormBuilder, private http: HttpClient, private router: Router){

    this.rForm = formBuilder.group({

      'asignatura': [null, Validators.required],
      'tema': [null, Validators.required],
      'subTema': [null, Validators.required],
      'tipoPregunta': [null, Validators.required],
      'nivelDificultad': [null, Validators.required],
      'nivelAprendizaje': [null, Validators.required],
      'profesorAutor': [null, Validators.required],
      'anhoAcademico': [null, Validators.required],
      'semestre': [null, Validators.required],
      'puntajeTotal': [null, Validators.required],
      'preguntaEnunciado': [null, Validators.required],
      'preguntaAlternativas': this.formBuilder.array([]),
      'respuesta': [null, Validators.required],
      'respuestaAlternativas': this.formBuilder.array([]),
      'retroalimentacion': this.formBuilder.array([]),
      
      'respuestaVerdaderoFalso': [false, Validators.required]
    });
  }

  ngOnInit() {
  }

  postActividad(post) {
 
    console.log(post);
    
    this.http.post(`${this.domain}/actividades`, post).subscribe(data =>{
      console.log(data);
      this.actividad = data;
      console.log(this.actividad);
    });

    //this.router.navigate(['/actividades']);
  }

  onAddAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('preguntaAlternativas')).push(control);

  }

  onAddRespuestaAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('respuestaAlternativas')).push(control);

  }

  onAddRetroalimentacion() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('retroalimentacion')).push(control);

  }

  

}

