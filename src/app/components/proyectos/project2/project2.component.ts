import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  title: string;
  descripcion: string;
  list: string [];
  github: string;
  
  constructor() { }

  ngOnInit(): void {
  
    this.title = "Peliculas";
  
    this.list = ['HTML', 'CSS', 'PHP', 'SQL'];
    
    this.github = "Ver repositorio de este proyecto en GitHub"
  
    this.descripcion = `
      Este proyecto fue el primero que hize para incluir todos mis conocimientos en un proyecto grande, fue creado
      como un proyecto para mi ultimo cuatrimestre en la universidad donde se tenia que incluir una base
      de datos, decidi usar solamente PHP sin ningun framwork 
    `;
  }

}
