import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ContactComponent } from './contact/contact.component';
import {QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';

import { ApiComponent } from './api/api.component';
import { FaqComponent } from './faq/faq.component';
import { RegistrationComponent } from './registration/registration.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { CreateRPComponent } from './create-rp/create-rp.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "QuiSommesNous",
    component: QuiSommesNousComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "connexion",
    component: ConnexionComponent
  },
  {
    path: "create-rp",
    component: CreateRPComponent
  },
  {
    path: "who-are-we",
    component: WhoAreWeComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "api",
    component: ApiComponent,


    children: [
      {
        path: "home",
        component: HomeComponent
      }
    ]
  },
  
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
