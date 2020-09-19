import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  title: string;
  descripcion: string;
  list: string [];
  github: string;

  constructor() { }

  ngOnInit(): void {
  
    this.title = "Portafolio";
  
    this.list = ['Angular', 'JQuery', 'Typescript', 'Bootstrap 4', 'HTML', 'CSS', 'Moment js'];
    
    this.github = "Ver repositorio de este proyecto en GitHub"
  
    this.descripcion = `
      Este portafolio lo cree para mostrar los proyectos que he realizado al momento y los que posteriormente
      vaya realizando en un futuro. Con este portafolio me quiero dar a conozer compartiendo el repositorio
      de los proyectos para dar a conozer las tecnologias que se manejar hasta el momento.
    `;
  }

}
