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
        path: "C:\\Program Files\\Service1\\Service1.exe",
        configPath: "C:\\Program Files\\Service1\\config.json",
        status: true
      },
      {
        name: "Service 2",
        path: "C:\\Program Files\\Service2\\Service2.exe",
        configPath: "C:\\Program Files\\Service2\\config.json",
        status: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
