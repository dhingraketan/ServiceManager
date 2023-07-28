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
  @Output() UploadConfigEvent = new EventEmitter<Update>();
  @Output() DownloadConfigEvent = new EventEmitter<Service>();
  @Output() UploadCodeEvent = new EventEmitter<Update>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  onStart() {
    console.log("Start");
  }

  onStop() {
    console.log("Stop");
  }

  onUploadCode() {
    console.log("Upload Code");
    setTimeout(() => {
      this.dialog.open(UploadFilePopupComponent, {
        data: {
          serviceName: this.service.name,
          file: null,
          isUploading: true
        }
      }).afterClosed().subscribe(update => {
        if (update) {
          this.UploadCodeEvent.emit(update);
        }
      });
    })
  }


  onDownloadConfig() {
    console.log("Download Config");
    this.DownloadConfigEvent.emit(this.service);
  }

  onUploadConfig() {
    console.log("Upload Config");

    setTimeout(() => {
      this.dialog.open(UploadFilePopupComponent, {
        data: {
          serviceName: this.service.name,
          file: null,
          isUploading: true
        }
      }).afterClosed().subscribe(update => {
        if (update) {
          console.log(update);
          this.UploadConfigEvent.emit(update);
        }
      });
    })
  }
}
