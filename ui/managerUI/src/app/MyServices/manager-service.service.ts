import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private httpClient: HttpClient) { }

  getServices(): Observable<any> {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.GET_SERVICES;
    return this.httpClient.get(url);
  }

  startService(serviceName: string): Observable<any> {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.START_SERVICE;
    return this.httpClient.post(url, {serviceName});
  }

  stopService(serviceName: string): Observable<any> {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.STOP_SERVICE;
    return this.httpClient.post(url, {serviceName});
  }

  uploadConfig(serviceName: string, file: File): Observable<any> {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.UPLOAD_CONFIG + '/' + serviceName;
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.put(url, formData);
  }

  uploadCode(serviceName: string, file: File): Observable<any> {
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.UPLOAD_CODE + '/' + serviceName;
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.put(url, formData);
  }

  downloadConfig(serviceName: string){
    let url = environment.SERVICE_BASE_URL + environment.SERVICE.DOWNLOAD_CONFIG;
    return this.httpClient.post(
      url,
      {serviceName},
      {
        responseType: 'blob',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
    );
  }


}
