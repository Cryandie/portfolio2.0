import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './components/intro/intro.component';
import { WhoComponent } from './components/who/who.component';
import { WhatComponent } from './components/what/what.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { MovieAppDetailsComponent } from './components/projects-details/movie-app-details/movie-app-details.component';
import { TodoDetailsComponent } from './components/projects-details/todo-details/todo-details.component';
import { ForssaDetailsComponent } from './components/projects-details/forssa-details/forssa-details.component';
import { SbsDetailsComponent } from './components/projects-details/sbs-details/sbs-details.component';
import { ProjectsComponent } from './components/projects-details/projects/projects.component';
import { ProjectsDetailsNavComponent } from './components/projects-details/projects-details-nav/projects-details-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavComponent, IntroComponent, WhoComponent, WhatComponent, WorkComponent, ContactComponent, MovieAppDetailsComponent, TodoDetailsComponent, ForssaDetailsComponent, SbsDetailsComponent, ProjectsComponent, ProjectsDetailsNavComponent, FooterComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
