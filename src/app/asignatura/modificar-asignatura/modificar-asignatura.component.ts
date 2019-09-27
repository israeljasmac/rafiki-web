import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-asignatura',
  templateUrl: './modificar-asignatura.component.html',
  styleUrls: ['./modificar-asignatura.component.css']
})
export class ModificarAsignaturaComponent implements OnInit {

  rForm: FormGroup;
  nombre: String = '';
  horasPedagogicasConJecAnual: Number;
  horasPedagogicasSinJecAnual: Number;
  horasPedagogicasConJecSemanal: Number;
  horasPedagogicasSinJecSemanal: Number;
  domain: string = 'http://localhost:10010';
  asignatura: any;
  id: String ="5a785f213502192ba4c584d5";  //Borrar!!!!5a785f213502192ba4c584d5

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute) {
    this.rForm = formBuilder.group({
      'nombre': [Validators.required],
      'horasPedagogicasConJecAnual': [Validators.required],
      'horasPedagogicasSinJecAnual': [Validators.required],
      'horasPedagogicasConJecSemanal': [Validators.required],
      'horasPedagogicasSinJecSemanal': [Validators.required],
      'enfasis': this.formBuilder.array([null])
    });
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    });
  }

  updateAsignatura(asignatura) {
    console.log(asignatura);
    this.httpClient.put(`${this.domain}/asignaturas/${this.id}`, asignatura).subscribe(data => {
      console.log(asignatura);
    });
    // this.getCursoId();
  }

  getAsignatura() {
    this.httpClient.get(`${this.domain}/asignaturas/${this.id}`).subscribe(data => {
      //console.log(data);
      this.asignatura = data;
      console.log(this.asignatura)
    });
  }

  addEnfasis() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('enfasis')).push(control);
  }

  ngOnInit() {
    this.getAsignatura();
  }

}
