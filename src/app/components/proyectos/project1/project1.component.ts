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

  constructor() { }

  ngOnInit(): void {
  
  this.title = "Portafolio";
  
  this.list = ['Angular', 'JQuery', 'Typescript', 'Bootstrap 4', 'HTML', 'CSS', 'Moment js'];
  }

}
