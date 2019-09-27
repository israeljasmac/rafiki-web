import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-asignatura',
  templateUrl: './detalles-asignatura.component.html',
  styleUrls: ['./detalles-asignatura.component.css']
})
export class DetallesAsignaturaComponent implements OnInit {

  asignatura: any;
  id: string= ""; //Borrar5a763951a100651780fe93de
  domain: string = 'http://localhost:10010';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    });
  }

  getAsignatura() {
    this.httpClient.get(`${this.domain}/asignaturas/${this.id}`).subscribe(data => {
      //console.log(data);
      this.asignatura = data;
      console.log(this.asignatura)
    });
  }

  ngOnInit() {
    this.getAsignatura();
  }

}
