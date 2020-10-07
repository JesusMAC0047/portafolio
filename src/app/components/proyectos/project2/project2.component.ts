import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  private title: string;
  private descripcion: string;
  private list: string [];
  private github: string;
  
  constructor() { }

  ngOnInit(): void {
  
    this.title = "Peliculas";
  
    this.list = ['HTML', 'CSS', 'PHP', 'SQL'];
    
    this.github = "Ver repositorio de este proyecto en GitHub"
  
    this.descripcion = `
      Este proyecto fue el primero que hize para incluir todos mis conocimientos en un proyecto grande, fue creado
      como un proyecto para mí ultimo cuatrimestre en la universidad usando solamente PHP sin incluir ningún
      framework.
    `;
  }

}
