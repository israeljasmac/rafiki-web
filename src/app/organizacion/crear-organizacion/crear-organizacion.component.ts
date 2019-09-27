import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrganizacionService } from '../services/organizacion.service';
import { } from ''

@Component({
  selector: 'app-crear-organizacion',
  templateUrl: './crear-organizacion.component.html',
  styleUrls: ['./crear-organizacion.component.css']
})
export class CrearOrganizacionComponent implements OnInit {
  rForm: FormGroup;
  organizacion: any;
  nombre: String = '';

  mensaje: String= '';

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private organizacionService: OrganizacionService
  ) { 
    this.rForm = fb.group({
      'nombre': [null, Validators.required],
      'rbd': [null, Validators.required, Validators.min(0), Validators.max(5)],
      'descripcion': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(100)]
      )],
      'reconocimientoOficial': [null, Validators.required],
      'dependencia': [null, Validators.required],
      'sostenedor': [null, Validators.required],
      'orientacionReligiosa': [null, Validators.required],
      'correo': [null, Validators.required],
      'telefono': [null, Validators.required],
      'web': [null, Validators.required],
      'director': [null, Validators.required],
      'mensualidad': [null, Validators.required],
      'numVacantes': [null, Validators.required],
      'totalAlumnosMatriculados': [null, Validators.required],
      'promAlumnosCurso': [null, Validators.required],
      'puntajeSimce': [null, Validators.required],
      'direccion.calle': [null, Validators.required],
      'direccion.region': [null, Validators.required],
      'direccion.comuna': [null, Validators.required],
      'fechaPostulacion.inicio': [null, Validators.required],
      'fechaPostulacion.cierre': [null, Validators.required],
    })
  }

  ngOnInit() {
  }

  crearOrganizacion(organizacion){
    this.mensaje = 'Se ha añadido correctamente la organizacion <'+ organizacion.nombre +'> a la Base de Datos. Se le redireccionará a la pagina de inicio';
    this.nombre = organizacion.nombre;
    this.organizacionService.postOrganizacion(organizacion)
    .subscribe(res => {
        this.organizacion = res;
        setTimeout(() =>{
          this.router.navigate(['/organizaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
    );
  }

}
