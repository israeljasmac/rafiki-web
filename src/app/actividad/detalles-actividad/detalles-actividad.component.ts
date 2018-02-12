import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-actividad',
  templateUrl: './detalles-actividad.component.html',
  styleUrls: ['./detalles-actividad.component.css']
})
export class DetallesActividadComponent implements OnInit {
  
  actividad: any;
  idActividad: String;
  domain: string = 'http://localhost:10010/actividades';

  respuesta: Array<String>;


  constructor(private route: ActivatedRoute, private router: Router, private HttpClient: HttpClient) {
    
    this.route.params.subscribe(res => {
      
      this.idActividad = res.id;
      

      console.log(res.id)
    })
  }

  getActividad(){

    this.HttpClient.get(`${this.domain}/${this.idActividad}`).subscribe(data =>{
      // console.log(data);
      this.actividad = data;
      console.log("GET ACTIVIDAD");
      console.log(this.actividad);
    
    });
  }

  ngOnInit() {
    this.getActividad();
  }
 
}





