import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Update } from '../Update';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment.dev';

const configUri = environment.SERVICE_BASE_URL + environment.SERVICE.UPLOAD;
@Component({
  selector: 'app-upload-file-popup',
  templateUrl: './upload-file-popup.component.html',
  styleUrls: ['./upload-file-popup.component.css']
})
export class UploadFilePopupComponent {
  update!: Update;

  uploader: FileUploader = new FileUploader({ url: configUri });

  constructor(
    public dialogRef: MatDialogRef<UploadFilePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.update = Object.assign({}, this.data);
  }

  ngOnInit(): void {
    this.update = Object.assign({}, this.data);
  }

  onUpload() {
    //check if it is the correct file by checking the name
    if(this.data.isUploadingConfig){

      if(this.uploader.queue[0].file.name != this.data.serviceName + "_config.json"){
        window.alert("Please select the correct file");
        this.uploader.clearQueue();
      }
      else{
        this.uploader.uploadAll();
        window.alert('File uploaded successfully, Please restart the service to apply changes');
        this.dialogRef.close();
      }

    } else if(!this.data.isUploadingCode){
      
      if(this.uploader.queue[0].file.name != this.data.serviceName + ".py"){
        window.alert("Please select the correct file");
        this.uploader.clearQueue();
      }
      else{
        this.uploader.uploadAll();
        window.alert('File uploaded successfully, Please restart the service to apply changes');
        this.dialogRef.close();
      }
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
