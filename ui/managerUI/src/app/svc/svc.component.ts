import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../Service';

@Component({
  selector: 'app-svc',
  templateUrl: './svc.component.html',
  styleUrls: ['./svc.component.css']
})
export class SvcComponent implements OnInit{
  @Input() service!: Service;
  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onStart(service: Service){}

  onStop(service: Service){}

  onUploadCode(service: Service){}

  onDownloadConfig(service: Service){}

  onUploadConfig(service: Service){}
}
