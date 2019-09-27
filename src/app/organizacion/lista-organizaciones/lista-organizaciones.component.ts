import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../services/organizacion.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PipeTransform, Pipe } from '@angular/core';
import { Organizacion } from '../../models/Organizacion';


@Component({
  selector: 'app-lista-organizaciones',
  templateUrl: './lista-organizaciones.component.html',
  styleUrls: ['./lista-organizaciones.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class ListaOrganizacionesComponent implements OnInit {
  organizaciones: any;

  constructor(
    private organizacionService: OrganizacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOrganizaciones();
  }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones()
      .subscribe(res => { 
        this.organizaciones = res
      }
    )
  }

  deleteOrganizacion(id, i): void {
    const respuesta = confirm('¿ Estás seguro que deseas eliminarlo?');
    if(respuesta){
      this.organizacionService.deleteOrganizacion(id)
        .subscribe(res => {
            this.organizaciones.organizacion.splice(i, 1)
        },(err) => {
          console.log(err);
        }
      )
    }
  } 

}
