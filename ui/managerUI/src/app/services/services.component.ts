import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  services!:Service[];

  constructor() { 
    this.services = [
      {
        name: "Service 1",
        status: true,
      },
      {
        name: "Service 2",
        status: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
