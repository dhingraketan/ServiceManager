import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Update } from '../Update';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-file-popup',
  templateUrl: './upload-file-popup.component.html',
  styleUrls: ['./upload-file-popup.component.css']
})
export class UploadFilePopupComponent {
  update!: Update;

  constructor(
    public dialogRef: MatDialogRef<UploadFilePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.update = Object.assign({}, this.data);
  }

  ngOnInit(): void {
    this.update = Object.assign({}, this.data);
  }

  onSubmit(): void {
    this.dialogRef.close(this.update);
  }
  

  onCancel(): void {
    this.dialogRef.close();
  }

}
