import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit {
  
  rForm: FormGroup;
  domain: string = 'http://localhost:10010';
  asignatura: any;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.rForm = formBuilder.group({
      'nombre': [null, Validators.required],
      'horasPedagogicasConJecAnual': [null, Validators.required],
      'horasPedagogicasSinJecAnual': [null, Validators.required],
      'horasPedagogicasConJecSemanal': [null, Validators.required],
      'horasPedagogicasSinJecSemanal': [null, Validators.required],
      'enfasis': this.formBuilder.array([null])
    });
   }

   addPost(post) {
    // this.idCurso = post.idCurso;
    this.httpClient.post(`${this.domain}/asignaturas`, post).subscribe(data=>{
    });
  }

  addEnfasis() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('enfasis')).push(control);
  }
  ngOnInit() {
  }

}
