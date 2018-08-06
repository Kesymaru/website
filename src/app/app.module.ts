import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule} from '@angular/cdk/overlay';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { InformationComponent } from "./information/information.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import { PorfolioComponent } from "./porfolio/porfolio.component";
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from "./experience/experience.component";
import { FooterComponent } from "./footer/footer.component";
import { FabComponent } from "./fab/fab.component";



@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    AboutComponent,
    ContactComponent,
    PorfolioComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    FabComponent

    // FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    CommonModule,
    MaterialModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
