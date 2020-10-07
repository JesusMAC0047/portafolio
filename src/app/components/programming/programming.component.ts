import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

  private lenguajes: string[];
  private frameworks: string[];
  private dataBases: string[];
  private enmaquetados: string[];
  private otros: string[];

  constructor() {
  
    this.lenguajes = [
      'PHP',
      'JavaScript',
      'TypeScript',
      'Java'
    ];
    
    this.frameworks = [
      'Laravel',
      'Angular',
      'JQuery',
      'Node.js'
    ];
    
    this.dataBases = [
      'MariaDB',
      'MongoDB'
    ];
    
    this.enmaquetados = [
      'CSS',
      'HTML',
      'Bootstrap 4',
      'Wordpress'
    ];
    
    this.otros = [
      'Github',
      'Programación orientada a objetos',
      'Modelo vista controlador'
    ];
  }

  ngOnInit(): void {
  }

}
