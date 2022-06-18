import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationInfoComponent } from './components/registration-information/registration-information.component';


import { DxButtonModule, DxCheckBoxModule, DxDateBoxModule, DxSelectBoxModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
