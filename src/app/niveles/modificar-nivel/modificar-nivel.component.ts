import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar-nivel',
  templateUrl: './modificar-nivel.component.html',
  styleUrls: ['./modificar-nivel.component.css']
})
export class ModificarNivelComponent implements OnInit {

  domain : String = 'http://localhost:10010';
  nivel  : any;
  rForm: FormGroup;
  sigla: String = '' ;
  tipo_nivel: String = '' ;
  grado: Number;
  descripcion: String = '' ;
  decreto: String = '';
  id: String;

  constructor(private formBuilder: FormBuilder,private HttpClient: HttpClient, private route: ActivatedRoute,) { 

    this.rForm = formBuilder.group({
    'sigla': [Validators.required],
    'tipo_nivel': [Validators.required],
    'grado': [Validators.required],
    'descripcion': [Validators.required],
    'decreto': [Validators.required]

    });
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })
  }

  updateNivel(put) {
    console.log(put);
    this.HttpClient.put(`${this.domain}/niveles/${this.id}`, put).subscribe(data => {
      
      this.nivel = data;
      console.log(this.nivel);
    });
  }
  getNivelId() {
    this.HttpClient.get(`${this.domain}/niveles/${this.id}`).subscribe(data => {
      // console.log(data);
      this.nivel = data;
      console.log(this.nivel);
    });
  }
  

  ngOnInit() {
    this.getNivelId();
  }

}
