import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  curso: any;
  id: String;
  domain: string = 'http://localhost:10010';

  constructor(private route: ActivatedRoute, private router: Router, private HttpClient: HttpClient) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })
  }


  ngOnInit() {
    this.HttpClient.get(`${this.domain}/cursos/${this.id}`).subscribe(data =>{
      // console.log(data);
      this.curso = data;
      console.log(this.curso);
    });
  }

}
