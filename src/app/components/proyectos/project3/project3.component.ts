import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  public title: string;
  public descripcion: string;
  public list: string [];
  public github: string;

  constructor() { }

  ngOnInit(): void {
  
    this.title = "Movie Searcher";
  
    this.list = ['HTML', 'SASS', 'Angular', 'API', 'peticiones AJAX'];
    
    this.github = "Ver repositorio de este proyecto en GitHub"
  
    this.descripcion = `
      Este proyecto fue creado para practicar las peticiones ajax a una api publica, la página al insertar un
      nombre en el buscador la API te regresa el poster de la película, sus actores, su genero y su trama.
    `;
  }

}
