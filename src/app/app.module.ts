import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { ApiComponent } from './api/api.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateRPComponent } from './create-rp/create-rp.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { MajorMinorComponent } from './major-minor/major-minor.component';
import { ApitestComponent } from './apitest/apitest.component';
import { FaqComponent } from './faq/faq.component';
import { AdministrationComponent } from './administration/administration.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SearchComponent } from './search/search.component';
import { ViewRpComponent } from './view-rp/view-rp.component';
import { ListeRpComponent } from './liste-rp/liste-rp.component';
import { LoginService } from './_services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    FaqComponent,
    ProfileComponent,
    ApiComponent,
    RegistrationComponent,
    ConnexionComponent,
    CreateRPComponent,
    WhoAreWeComponent,
    MajorMinorComponent,
    ApitestComponent,
    AdministrationComponent,
    ViewProfileComponent,
    SearchComponent,
    AdministrationComponent,
    ViewRpComponent,
    ListeRpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ LoginService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
