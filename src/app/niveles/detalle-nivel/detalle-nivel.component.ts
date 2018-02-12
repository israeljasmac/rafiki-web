import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-nivel',
  templateUrl: './detalle-nivel.component.html',
  styleUrls: ['./detalle-nivel.component.css']
})
export class DetalleNivelComponent implements OnInit {

  nivel: any;
  id: String;
  domain: string = 'http://localhost:10010';

  constructor(private route: ActivatedRoute, private router: Router, private HttpClient: HttpClient) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })
  }


  ngOnInit() {
    this.HttpClient.get(`${this.domain}/niveles/${this.id}`).subscribe(data =>{
      // console.log(data);
      this.nivel = data;
      console.log(this.nivel);
    });
  }

}
