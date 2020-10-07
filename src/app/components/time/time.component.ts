import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  public currentTime: string;
  
  constructor() {}

  ngOnInit(): void {
  
    moment.locale('es');
    setInterval(() =>{
      this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
  }

}
