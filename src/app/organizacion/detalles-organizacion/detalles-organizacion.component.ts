import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrganizacionService } from '../services/organizacion.service';

@Component({
  selector: 'app-mostrar-organizacion',
  templateUrl: './detalles-organizacion.component.html',
  styleUrls: ['./detalles-organizacion.component.css']
})
export class DetallesOrganizacionComponent implements OnInit {
  organizaciones: any;
  id_: String;

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private organizacionService: OrganizacionService,
  ) {  
    this.route.params.subscribe(res => {
      this.id_ = res.id;
    } )
  }

  getOrganizacion(): void {
      this.organizacionService.getOrganizacion(this.id_)
      .subscribe(res => { 
        this.organizaciones = res,
        console.log(res)
      }
    )
  }

  ngOnInit() {
    this.getOrganizacion()
  }

}
