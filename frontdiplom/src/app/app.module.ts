import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContacsComponent } from './contacs/contacs.component';
import { AsiatoursComponent } from './asiatours/asiatours.component';
import { EuropetoursComponent } from './europetours/europetours.component';
import { AfricatoursComponent } from './africatours/africatours.component';
import { SouthamericatoursComponent } from './southamericatours/southamericatours.component';
import { NorthamericatoursComponent } from './northamericatours/northamericatours.component';
import { OceaniatoursComponent } from './oceaniatours/oceaniatours.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToulookComponent } from './toulook/toulook.component';
import { HelpinfoComponent } from './helpinfo/helpinfo.component';
import { AlltoursComponent } from './alltours/alltours.component';
import {SharedService} from './shared.service';



import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ContacsComponent,
    AsiatoursComponent,
    EuropetoursComponent,
    AfricatoursComponent,
    SouthamericatoursComponent,
    NorthamericatoursComponent,
    OceaniatoursComponent,
    LoginComponent,
    RegisterComponent,
    ToulookComponent,
    HelpinfoComponent,
    AlltoursComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
