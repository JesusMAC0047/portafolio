import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimeComponent } from './components/time/time.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { Project1Component } from './components/proyectos/project1/project1.component';
import { Project2Component } from './components/proyectos/project2/project2.component';
import { Project3Component } from './components/proyectos/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ErrorComponent,
    ContactComponent,
    TimeComponent,
    ProgrammingComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
