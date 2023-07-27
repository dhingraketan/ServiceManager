import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../Service';
import {MatDialog} from '@angular/material/dialog';
import { UploadConfigPopupComponent } from '../upload-config-popup/upload-config-popup.component';
import { UploadCodePopupComponent } from '../upload-code-popup/upload-code-popup.component';


@Component({
  selector: 'app-svc',
  templateUrl: './svc.component.html',
  styleUrls: ['./svc.component.css']
})
export class SvcComponent implements OnInit{
  @Input() service!: Service;
  @Output() UploadConfigEvent = new EventEmitter<Service>();
  @Output() DownloadConfigEvent = new EventEmitter<Service>();
  @Output() DownloadCodeEvent = new EventEmitter<Service>();

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onStart(){}

  onStop(){}

  onUploadCode(){

    setTimeout(() => {
      this.dialog.open(UploadConfigPopupComponent, {
        data: {
          name: this.service.name,
          isUploading: true
        }
      }).afterClosed().subscribe(uploadedFile => {
        if(uploadedFile){
          this.service.file = uploadedFile;
          this.UploadConfigEvent.emit(this.service);
        }
      });
    })
  }

  onDownloadConfig(){}

  onUploadConfig(){}
}
