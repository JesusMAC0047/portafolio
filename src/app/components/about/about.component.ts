import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title: string;
  paraghap: string;
  
  constructor() {
    this.title = "Sobre mí";
    this.paraghap = `
      Buen día, les cuento un poco sobre mí, hace poco tiempo termine la universidad con la 
      licenciatura de sistemas computacionales, en este portafolio les dare a conozer los
      lenguajes y frameworks que se manejar y un poco de proyectos que he desarrollado para 
      poner a prueba mis conocimientos.
    `;
  }

  ngOnInit(): void {
  }

}
