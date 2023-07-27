import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { SvcComponent } from './svc/svc.component';
import { UploadConfigPopupComponent } from './upload-config-popup/upload-config-popup.component';
import { UploadCodePopupComponent } from './upload-code-popup/upload-code-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    SvcComponent,
    UploadConfigPopupComponent,
    UploadCodePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
