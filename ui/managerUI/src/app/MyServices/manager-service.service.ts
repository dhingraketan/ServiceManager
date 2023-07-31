import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Update } from '../Update';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private httpClient: HttpClient) { }

  getServices() {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.GET_SERVICES;
    return this.httpClient.get(url);
  }

  startService(serviceName: string) {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.START_SERVICE + '/' + serviceName;
    return this.httpClient.put(url, serviceName);
  }

  stopService(serviceName: string) {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.STOP_SERVICE + '/' + serviceName;
    return this.httpClient.put(url, serviceName);
  }

  uploadConfig(serviceName: string, file: File) {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.UPLOAD_CONFIG + '/' + serviceName;
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.put(url, formData);
  }

  uploadCode(serviceName: string, file: File) {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.UPLOAD_CODE + '/' + serviceName;
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.put(url, formData);
  }

  downloadConfig(serviceName: string) {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.DOWNLOAD_CONFIG + '/' + serviceName;
    return this.httpClient.get(url, { responseType: 'blob' });
  }


}
