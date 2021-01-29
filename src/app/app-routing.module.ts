import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ContactComponent } from './contact/contact.component';
import { DocsComponent } from './docs/docs.component';

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
    component: HomeComponent},{
    path: "docs",
    component: DocsComponent,
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
