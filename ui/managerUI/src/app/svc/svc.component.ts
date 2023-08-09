import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../Service';
import { MatDialog } from '@angular/material/dialog';
import { UploadFilePopupComponent } from '../upload-file-popup/upload-file-popup.component';
import { Update } from '../Update';


@Component({
  selector: 'app-svc',
  templateUrl: './svc.component.html',
  styleUrls: ['./svc.component.css']
})
export class SvcComponent implements OnInit {
  @Input() service!: Service;
  @Output() downloadConfigEvent = new EventEmitter<string>();
  @Output() startEvent = new EventEmitter<string>();
  @Output() stopEvent = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  onStart() {
    const confirmStart = window.confirm('Are you sure you want to start the service?');
    if (confirmStart) {
      this.startEvent.emit(this.service.name);
    }
  }

  onStop() {
    const confirmStop = window.confirm('Are you sure you want to stop the service?');
    if (confirmStop) {
      this.stopEvent.emit(this.service.name);
    }
  }


  onUploadCode() {
    console.log("Upload Code");
    setTimeout(() => {
      this.dialog.open(UploadFilePopupComponent, {
        data: {
          serviceName: this.service.name,
          file: null,
          isUploadingConfig: false
        }
      }).afterClosed().subscribe(update => {
        if (update) {
          console.log(update);
        }
      });
    })
  }


  onDownloadConfig() {
    console.log("Download Config");
    this.downloadConfigEvent.emit(this.service.name);
  }

  onUploadConfig() {
    console.log("Upload Config");

    setTimeout(() => {
      this.dialog.open(UploadFilePopupComponent, {
        data: {
          serviceName: this.service.name,
          file: null,
          isUploadingConfig: true
        }
      }).afterClosed().subscribe(update => {
        if (update) {
          console.log(update);
        }
      });
    })
  }
}
