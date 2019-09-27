import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {

  rForm: FormGroup;
  idCurso: String = '';
  nivel: String = '';
  asignatura: String = '';
  profesorJefe: String = '';
  salaCurso: String = '';
  totalAlumnos: Number;
  domain: string = 'http://localhost:10010';
  curso: any;
  id: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private HttpClient: HttpClient) {
    this.rForm = formBuilder.group({
      'idCurso': [Validators.required],
      'nivel': [Validators.required],
      'asignatura': [Validators.required],
      'profesorJefe': [Validators.required],
      'salaCurso': [Validators.required],
      'totalAlumnos': [Validators.required]
    });
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })
  }

  updatePut(put) {
    console.log(put);
    this.HttpClient.put(`${this.domain}/cursos/${this.id}`, put).subscribe(data => {
      console.log(put);
    });
    // this.getCursoId();
  }

  getCursoId() {
    this.HttpClient.get(`${this.domain}/cursos/${this.id}`).subscribe(data => {
      // console.log(data);
      this.curso = data;
      console.log(this.curso);
    });
  }

  ngOnInit() {
    this.getCursoId();
  }

}
