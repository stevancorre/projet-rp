import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateRPComponent } from './create-rp/create-rp.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { MajorMinorComponent } from './major-minor/major-minor.component';
import { FaqComponent } from './faq/faq.component';
<<<<<<< HEAD
import { AdministrationComponent } from './administration/administration.component';

=======
import { ViewProfileComponent } from './view-profile/view-profile.component';
>>>>>>> bea90f2be749decd2f79e91c38d8b450e890226f
import { ApiComponent } from './api/api.component';
import { ApitestComponent } from './apitest/apitest.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
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
      path: "view-profile",
      component: ViewProfileComponent
    },

  {
    path: "+18",
    component: MajorMinorComponent
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
    path: "administration",
    component: AdministrationComponent
  },
  {
    path: "apitest",
    component: ApitestComponent
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
