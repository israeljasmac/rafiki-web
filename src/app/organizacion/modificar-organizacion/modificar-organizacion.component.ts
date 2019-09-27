import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrganizacionService } from '../services/organizacion.service';

@Component({
  selector: 'app-modificar-organizacion',
  templateUrl: './modificar-organizacion.component.html',
  styleUrls: ['./modificar-organizacion.component.css']
})
export class ModificarOrganizacionComponent implements OnInit {
  rForm: FormGroup;
  organizacion: any;
  id: String;
  nombre: String = '';
  mensaje: String= '';

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private organizacionService: OrganizacionService) { 
      this.route.params.subscribe(res => {
        this.id = res.id;
      } )

      this.rForm = fb.group({
        'nombre': [Validators.required],
        'rbd': [Validators.required],
        'descripcion': [Validators.compose([
          Validators.required, 
          Validators.minLength(10), 
          Validators.maxLength(100)]
        )],
        'reconocimientoOficial': [Validators.required],
        'dependencia': [ Validators.required],
        'sostenedor': [Validators.required],
        'orientacionReligiosa': [Validators.required],
        'correo': [Validators.required],
        'telefono': [Validators.required],
        'web': [Validators.required],
        'director': [Validators.required],
        'mensualidad': [ Validators.required],
        'numVacantes': [Validators.required],
        'totalAlumnosMatriculados': [Validators.required],
        'promAlumnosCurso': [Validators.required],
        'puntajeSimce': [Validators.required],
        'direccion.calle': [Validators.required],
        'direccion.region': [Validators.required],
        'direccion.comuna': [Validators.required],
        'fechaPostulacion.inicio': [Validators.required],
        'fechaPostulacion.cierre': [Validators.required],
      })
    }

  ngOnInit() {
    this.getOrganizacion();
  }

  getOrganizacion(): void {
    this.organizacionService.getOrganizacion(this.id)
    .subscribe(res => { 
      this.organizacion = res
    }
  )
}

  updateOrganizacion(organizacion){
    this.mensaje = 'Se ha modificado correctamente la organizacion <'+ organizacion.nombre +'>. Se le redireccionará a la pagina de inicio';
    this.nombre = organizacion.nombre;

    this.organizacionService.updateOrganizacion(organizacion, this.id)
    .subscribe(res => {
        this.organizacion = res;
        setTimeout(() =>{
          //this.router.navigate(['/organizacion',this.organizacion]);
          this.router.navigate(['/organizaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
    );
  }
}
