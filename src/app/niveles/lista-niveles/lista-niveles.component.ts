import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-lista-niveles',
  templateUrl: './lista-niveles.component.html',
  styleUrls: ['./lista-niveles.component.css']
})
export class ListaNivelesComponent implements OnInit {
  domain: String = 'http://localhost:10010';
  nivel: any;

  constructor(private HttpClient: HttpClient) { }

  getNiveles() {
    this.HttpClient.get(`${this.domain}/niveles`).subscribe(data => {
      console.log(data);
      this.nivel = data;
    });
  }

  deleteNivel(id) {
    this.HttpClient.delete(`${this.domain}/niveles/${id}`).subscribe(data => {
    this.ngOnInit();
    });
    

  }

  ngOnInit() {
    this.getNiveles();
  }

}
