import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  rForm: FormGroup;
  idCurso: String = '';
  nivel: String = '';
  asignatura: String = '';
  profesorJefe: String = '';
  salaCurso: String = '';
  totalAlumnos: Number;
  domain: string = 'http://localhost:10010';
  curso: any;
  niveles: any;
  objAprendizajes: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.rForm = formBuilder.group({
      'nombreCurso': [null, Validators.required],
      'salaCurso': [null, Validators.required],
      'detallesCurso': [null, Validators.required],
      'selectedNivel': [null, Validators.required],
      'selectedPlanifiacion': [null, Validators.required],
      // 'totalAlumnos': [null, Validators.required],
      // 'validate': ''
    });

  }

  addPost(post) {
    // this.idCurso = post.idCurso;
    // this.nivel = post.nivel;
    // this.asignatura = post.asignatura;
    // this.profesorJefe = post.profesorJefe;
    // this.salaCurso = post.salaCurso;
    // this.totalAlumnos = post.totalAlumnos;
    console.log(post);
    this.http.post(`${this.domain}/cursos`, post).subscribe(data => {
      // console.log(data);
      this.curso = data;
      console.log(this.curso);
    });
  }

  getNiveles() {
    this.http.get(`${this.domain}/niveles`).subscribe(data => {
      this.niveles = data;
      console.log(this.niveles);
    });
  }

  ngOnInit() {
    this.getNiveles();
  }

}
