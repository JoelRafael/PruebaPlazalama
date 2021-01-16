import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabledateComponent } from './tabledate/tabledate.component';
import {ServiceService} from './servicio/service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormpostComponent } from './formpost/formpost.component';

@NgModule({
  declarations: [
    AppComponent,
    TabledateComponent,
    FormpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
