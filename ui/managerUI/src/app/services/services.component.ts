import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';
import { MatDialog } from '@angular/material/dialog';
import { Update } from '../Update';
import { ManagerServiceService } from '../MyServices/manager-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  serviceResults: any;
  services!:Service[];
 

  constructor( private ManagerService: ManagerServiceService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.ManagerService.getServices().subscribe((data:any)=>{
      this.serviceResults = data;
      this.services = this.serviceResults;
    });
  }

 startService(name:string){
    this.ManagerService.startService(name).subscribe((data:any)=>{
      console.log(data);
      this.getServices();
    });
 }

  stopService(name:string){
    this.ManagerService.stopService(name).subscribe((data:any)=>{
      console.log(data);
      this.getServices();
    });
  }

  uploadCode(update:Update){
    this.ManagerService.uploadCode(update.serviceName, update.file).subscribe((data:any)=>{
      this.getServices();
    });
  }

  uploadConfig(update:Update){
    this.ManagerService.uploadConfig(update.serviceName, update.file).subscribe((data:any)=>{
      this.getServices();
    });
  }

  downloadConfig(name:string){
    this.ManagerService.downloadConfig(name).subscribe((data:any)=>{
      this.getServices();
    });
  }
}
