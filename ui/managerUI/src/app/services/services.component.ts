import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';
import { Update } from '../Update';
import { ManagerServiceService } from '../MyServices/manager-service.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ManagerServiceService]
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
      this.getServices();
    });
 }

  stopService(name:string){
    this.ManagerService.stopService(name).subscribe((data:any)=>{
      this.getServices();
    });
  }

  downloadConfig(name:string){
    this.ManagerService.downloadConfig(name).subscribe((data:any)=>{
      this.getServices();
      saveAs(data, name + "_config.json");
    });
  }
}
