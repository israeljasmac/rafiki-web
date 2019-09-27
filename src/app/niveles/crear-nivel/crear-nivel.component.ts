import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-nivel',
  templateUrl: './crear-nivel.component.html',
  styleUrls: ['./crear-nivel.component.css']
})
export class CrearNivelComponent implements OnInit {
  domain : String = 'http://localhost:10010';
  nivel  : any;
  rForm: FormGroup;
  sigla: String = '' ;
  tipo_nivel: String = '' ;
  grado: Number;
  descripcion: String = '' ;
  decreto: String = '';

  constructor(private formBuilder: FormBuilder,private HttpClient: HttpClient, private router: Router) { 

    this.rForm = formBuilder.group({
    'sigla': [null, Validators.required],
    'tipo_nivel': [null, Validators.required],
    'grado': [null, Validators.required],
    'descripcion': [null, Validators.required],
    'decreto': [null, Validators.required]

    });
    
  }

  postNivel(nivel) {
    console.log(nivel);
    this.HttpClient.post(`${this.domain}/niveles/`, nivel).subscribe(data => {
      
      this.nivel = data;
      console.log(this.nivel);
    });
  }

  ngOnInit() {
  }

}
