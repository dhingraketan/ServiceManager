import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Update } from '../Update';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

const uri = 'http://localhost:3000/services/uploadConfig';
@Component({
  selector: 'app-upload-file-popup',
  templateUrl: './upload-file-popup.component.html',
  styleUrls: ['./upload-file-popup.component.css']
})
export class UploadFilePopupComponent {
  update!: Update;

  uploader: FileUploader = new FileUploader({ url: uri });

  constructor(
    public dialogRef: MatDialogRef<UploadFilePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.update = Object.assign({}, this.data);
  }

  ngOnInit(): void {
    this.update = Object.assign({}, this.data);
  }
}
